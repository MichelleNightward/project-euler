import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SolutionsComponent} from "./solutions/components/solutions.component";
import {SolutionsService} from "./solutions/services/solutions.service";

@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SolutionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
