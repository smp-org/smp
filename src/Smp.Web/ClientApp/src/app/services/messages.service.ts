import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {  }

  public getMessagesFromConversation(conversationId: string, count: number = 10, page: number = 0): Observable<Object> {
    let headers = new HttpHeaders();
    headers.set('Authorization', "Bearer " + JSON.parse(localStorage.getItem('currentUser')).token);
    return this.httpClient.get(`${this.baseUrl}api/Messages/GetMessagesFromConversation/${conversationId}?count=${count}&page=${page}`, { headers: headers });
  }
}
