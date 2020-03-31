import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../core/api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) { }

  // search query
  private query: string = null;

  // bookmarks
  private bookmarks = [];

  /**
   * call search service and return results
   *
   * @param query - {string} query string
   * @return - {observable}
   */
  public getSearchResults(query: string): Observable<any> {
     return this.apiService.getSearchResults(query).pipe(map((response: any) => {
       return response;
     }));
  }

  /**
   * call bookmark service and add item to bookmarks locally
   *
   * @param item - {any} result item
   * @return - {observable}
   */
  public bookmarkItem(item: any): Observable<any> {
    return this.apiService.postBookmark(item).pipe(map((response: any) => {
      this.addBookmark(item);
      return response;
    }));
  }

  /**
   * query setter
   *
   * @param item - {string} search query
   */
  public setQuery(query: string) {
    this.query = query;
  }

  /**
   * query getter
   *
   * @return - {string}
   */
  public getQuery() {
    return this.query;
  }

  /**
   * add item to bookmarks
   *
   * @param bookmark - {any}
   * @return - {observable}
   */
  public addBookmark(bookmark: any) {
    this.bookmarks.push(bookmark);
  }

  /**
   * bookmarks getter
   *
   * @return - {Array<any>}
   */
  public getBookmarks() {
    return this.bookmarks;
  }
}
