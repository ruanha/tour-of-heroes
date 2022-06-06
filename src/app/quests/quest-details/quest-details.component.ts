import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})
export class QuestDetailsComponent implements OnInit {
  quest?: Quest;

  constructor(
    private questService: QuestService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getQuest();
  }

  getQuest(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.questService.getQuest(id)
      .subscribe(quest => this.quest = quest);
  }

}
