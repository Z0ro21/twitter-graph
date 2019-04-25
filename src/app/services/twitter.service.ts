import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(public http: HttpClient) {
  }

  getCommonFriends({userName1,userName2}): Promise<string[]> {
    return this.http.post<string[]>('https://us-central1-twitter-graph-codecamp.cloudfunctions.net/usersFollowers', {
      users: [
        { screen_name: userName1},
        { screen_name: userName2}
      ]
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise();
  }
}
