import { CustomKendoModule } from './custom-kendo.module';
import { SearchQueryBuilderComponent } from './search-query-builder/search-query-builder.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {QueryBuilderModule} from 'angular2-query-builder';
@NgModule({
  declarations: [AppComponent , SearchQueryBuilderComponent],
  imports: [CommonModule, FormsModule, BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, QueryBuilderModule, CustomKendoModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
