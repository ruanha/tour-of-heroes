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

  getQuest(id: number): Observable <Quest> {
    const url = `${this.questsUrl}/${id}`;
    return this.http.get<Quest>(url)
      .pipe(
        tap(_ => this.log(`fetched quest id=${id}`)),
        catchError(this.errorService.handleError<Quest>(`getQuest id=${id}`))
      )
  }

  /** PUT: update the quest on the server */
  updateQuest(quest: Quest): Observable<any> {
    return this.http.put(this.questsUrl, quest, this.httpOptions).pipe(
      tap(_ => this.log(`updated queest id=${quest.id}`)),
      catchError(this.errorService.handleError<any>('updateQuest'))
    );
  }

  /** Log a QuestService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QuestService: ${message}`);
  }

}
