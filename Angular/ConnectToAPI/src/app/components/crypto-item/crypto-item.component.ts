import { Component, Input } from '@angular/core';
import { Crypto } from '../../models/crypto-list.inferface';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css']
})
export class CryptoItemComponent {
  @Input() crypto!: Crypto;

}
