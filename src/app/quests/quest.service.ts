import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { MessageService } from '../shared/messages/message.service';
import { Quest } from './quest';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private questsUrl = 'api/quests'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private messageService: MessageService) { }

  /** GET quests from the server */
  getQuests(): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.questsUrl)
      .pipe(
        tap(_ => this.log('fetched quests')),
        catchError(this.errorService.handleError<Quest[]>('getQuests', []))
      );
  }

  /** Log a QuestService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QuestService: ${message}`);
  }

}
