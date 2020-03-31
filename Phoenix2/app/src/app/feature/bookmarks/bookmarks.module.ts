import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    ShareModule
  ]
})
export class BookmarksModule { }
