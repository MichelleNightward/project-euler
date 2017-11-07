import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MultiplesOf3And5Component} from "./solutions/multiples-of-3-and-5/multiples-of-3-and-5.component";
import {EvenFibonacciNumbersComponent} from "./solutions/even-fibonacci-numbers/even-fibonacci-numbers.component";
import {LargestPrimeFactorComponent} from "./solutions/largest-prime-factor/largest-prime-factor.component";

@NgModule({
  declarations: [
    AppComponent,
    MultiplesOf3And5Component,
    EvenFibonacciNumbersComponent,
    LargestPrimeFactorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
