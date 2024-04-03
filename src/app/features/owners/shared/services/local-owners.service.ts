import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owners } from '../interfaces/owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  private dbUrl = 'http://localhost:3000/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owners> {
    return this.http.get<Owners>(this.dbUrl);
  }
}
