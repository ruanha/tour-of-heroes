import { Component, OnInit } from '@angular/core';
import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent implements OnInit {
  quests: Quest[] = [];
  constructor(private questService: QuestService) { }

  ngOnInit(): void {
    this.getQuests();
  }

  getQuests(): void {
    this.questService.getQuests()
    .subscribe(quests => this.quests = quests);
  }

}
