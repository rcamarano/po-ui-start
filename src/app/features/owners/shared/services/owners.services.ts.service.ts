import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owners } from '../interfaces/owners.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersServicesTsService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getOwners(): Observable<Owners> {
    return this.httpClient.get<Owners>('XXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  }
}
