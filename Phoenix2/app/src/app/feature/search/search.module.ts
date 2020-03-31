import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import {SearchPageComponent} from './search-page/search-page/search-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '../../share/share.module';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  exports: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class SearchModule { }
