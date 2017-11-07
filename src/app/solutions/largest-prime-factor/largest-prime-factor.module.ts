import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {LargestPrimeFactorComponent} from './largest-prime-factor.component';

@NgModule({
  declarations: [
    LargestPrimeFactorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [LargestPrimeFactorComponent]
})
export class AppModule { }
