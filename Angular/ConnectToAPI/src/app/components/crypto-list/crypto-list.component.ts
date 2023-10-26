import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { Crypto } from '../../models/crypto-list.inferface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent {
cryptoList:Crypto[] = [];
constructor(private cryptoService: CryptoService, private modalService: NgbModal){}
selectedCryptoDetails: Crypto | undefined;

ngOnInit(): void{
  this.cryptoService.getCryptoList().subscribe(resp =>{
    this.cryptoList = resp.data;
  })
}

openModal(c: Crypto, content: any){
  this.cryptoService.getCryptoById(c.id).subscribe(resp =>{
    this.selectedCryptoDetails = resp.data;
    this.modalService.open(content);
  });
}
}
