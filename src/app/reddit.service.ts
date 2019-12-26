import { Injectable } from '@angular/core';
import { Reddit } from './reddit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  public url = 'https://www.reddit.com/';

  constructor(private http: HttpClient) { }

  getTop(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/top.json`, {headers});
  }

  getBest(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/best.json`);
  }

  getRandom(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/random.json`);
  }

  getHot(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/hot.json`);
  }

  getRising(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/rising.json`);
  }

  getNew(subreddit: string): Observable<Reddit> {
    return this.http.get<Reddit>(`${this.url}r/${subreddit}/new.json`);
  }
}
