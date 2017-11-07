import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SolutionsComponent } from './components/solutions.component';
import {SolutionsService} from "./services/solutions.service";

@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SolutionsService],
  bootstrap: [SolutionsComponent]
})
export class AppModule { }
