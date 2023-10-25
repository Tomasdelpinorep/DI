import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoItemComponent } from './components/crypto-item/crypto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
