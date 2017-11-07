import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EvenFibonacciNumbersComponent } from './even-fibonacci-numbers.component';

@NgModule({
  declarations: [
    EvenFibonacciNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [EvenFibonacciNumbersComponent]
})
export class AppModule { }
