import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoListResponse } from '../models/crypto-list.inferface';
import { CryptoDetails } from '../models/crypto-details.interface';

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  constructor(private http: HttpClient) { }

  getCryptoList(): Observable<CryptoListResponse> {
    return this.http.get<CryptoListResponse>('https://api.coincap.io/v2/assets/');
  }

  getCryptoById(cryptoId: string): Observable<CryptoDetails> {
    return this.http.get<CryptoDetails>(`https://api.coincap.io/v2/assets/${cryptoId}`);
  }
}
