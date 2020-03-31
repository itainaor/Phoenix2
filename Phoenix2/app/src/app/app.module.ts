import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js/dist/zone';
import { AppComponent } from './app.component';
// import 'promise-polyfill/src/polyfill';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './feature/search/search.component';
import {RouterModule} from '@angular/router';
import {SearchModule} from './feature/search/search.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { BookmarksComponent } from './feature/bookmarks/bookmarks.component';
import {ShareModule} from './share/share.module';
import {BookmarksModule} from './feature/bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    SearchModule,
    BookmarksModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
