import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoListResponse } from '../models/crypto-list.inferface';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCryptoList(): Observable<CryptoListResponse>{
    return this.http.get<CryptoListResponse>('https://api.coincap.io/v2/assets/');
  }
}
