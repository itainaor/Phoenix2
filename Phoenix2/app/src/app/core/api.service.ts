import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CONSTANTS} from '../constans';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  /**
   * get search results
   *
   * @param query - {string} query string
   * @return - {observable} - search results
   */
  public getSearchResults(query: string): Observable<any> {
    return this.http.get(CONSTANTS.API_URL.SEARCH + query)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err: any) => {
          return throwError(err);
        }));
  }

  /**
   * save bookmark in server session
   *
   * @param item - {any} result item
   * @return - {observable}
   */
  public postBookmark(item: any): Observable<any> {
    return this.http.post('/Home/Bookmark', {param: JSON.stringify(item), responseType: 'text'})
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err: any) => {
          return throwError(err);
        }));
  }
}
