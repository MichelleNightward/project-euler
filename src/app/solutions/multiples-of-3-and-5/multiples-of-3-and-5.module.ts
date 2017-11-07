import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiplesOf3And5Component } from './multiples-of-3-and-5.component';

@NgModule({
  declarations: [
    MultiplesOf3And5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MultiplesOf3And5Component]
})
export class AppModule { }
