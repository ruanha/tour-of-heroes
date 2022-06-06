import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { MessageService } from './message.service';
import { Quest } from './quest';

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
    private messageService: MessageService) { }

  /** GET quests from the server */
  getQuests(): Observable<Quest[]> {
    return this.http.get<Quest[]>(this.questsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Quest[]>('getQuests', []))
      );
  }
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a QuestService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QuestService: ${message}`);
  }
}
