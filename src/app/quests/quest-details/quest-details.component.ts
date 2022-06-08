import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';

import { Hero } from 'src/app/heroes/hero';
import { HeroService } from 'src/app/heroes/hero.service';
import { Quest } from '../quest';
import { QuestService } from '../quest.service';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent implements OnInit {
  quest?: Quest;
  heroes: Hero[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(
    private questService: QuestService,
    private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuest();
    this.getHeroes();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.heroes.slice())),
    );
  }

  displayFn(hero: Hero): string {
    return hero && hero.name ? hero.name : '';
  }

  private _filter(name: string): Hero[] {
    const filterValue = name.toLowerCase();

    return this.heroes.filter(hero => hero.name.toLowerCase().includes(filterValue));
  }

  getQuest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.questService.getQuest(id)
      .subscribe(quest => this.quest = quest);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  save(): void {
    if (this.quest) {
      this.quest.assignedHero = this.selectedHero;
      this.questService.updateQuest(this.quest).subscribe()
    }
  }
}
