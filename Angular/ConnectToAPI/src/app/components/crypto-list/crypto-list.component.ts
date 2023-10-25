import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { Crypto } from 'src/app/models/crypto-list.inferface';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent {
cryptoList:Crypto[] = [];
constructor(private cryptoService: CryptoService){}

ngOnInit(): void{
  this.cryptoService.getCryptoList().subscribe(resp =>{
    this.cryptoList = resp.data;
  })
}
}
