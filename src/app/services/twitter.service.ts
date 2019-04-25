import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(public http: HttpClient) {
  }

  getCommonFriends(userNames: string[]): Observable<string[]> {
    return this.http.post<string[]>('https://us-central1-twitter-graph-codecamp.cloudfunctions.net/usersFollowers', userNames, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}