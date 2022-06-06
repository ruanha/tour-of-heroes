import { Component, OnInit } from '@angular/core';
import { QUESTS } from '../mock-quests';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent implements OnInit {
  quests = QUESTS;
  constructor() { }

  ngOnInit(): void {
  }

}
