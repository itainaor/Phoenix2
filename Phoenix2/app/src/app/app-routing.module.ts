import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CONSTANTS} from './constans';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.SEARCH,
    loadChildren: () => import('./feature/search/search.module').then(m => m.SearchModule)
  },
  {
    path: CONSTANTS.ROUTES.BOOKMARKS,
    loadChildren: () => import('./feature/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  },
  {
    path: '',
    redirectTo: CONSTANTS.ROUTES.SEARCH,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
