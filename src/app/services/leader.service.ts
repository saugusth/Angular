import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  
  constructor(private http: HttpClient) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }

  getFeaturedleader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]));
  }

  getleaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)));
  }
  
}
