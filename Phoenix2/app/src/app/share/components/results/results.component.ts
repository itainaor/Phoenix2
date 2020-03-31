import {Component, Input, OnInit} from '@angular/core';
import {catchError, finalize, map} from 'rxjs/operators';
import {SearchService} from '../../../feature/search/search.service';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() isBookmarkMode = false;
  public results: any = [];
  public isLoading = false;
  public imgPath = environment.imgPath;

  constructor(private searchService: SearchService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.isBookmarkMode) {
      this.results = this.bookmarks;
    } else {
      this.getResults();
    }
  }

  /**
   * call search result service and return results
   *
   * @return - {observable} search results
   */
  public getResults() {
    this.isLoading = true;
    this.searchService.getSearchResults(this.searchService.getQuery())
      .pipe(
        map((response: any) => {
          this.results = response.items ? response.items : [];
          this.results.forEach((result) => {
            result.isBookmarked = this.isBookmarked(result);
            return result;
          });
        }),
        catchError((err: any) => {
          this.toastr.error('Error occurred. Please try again.');
          return throwError(err);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  /**
   * call bookmark item service and show a notification
   *
   * @param item - {any} result item
   * @return - {observable}
   */
  public bookmark(item: any) {
    item.isBookmarked = true;
    this.searchService.bookmarkItem(item)
      .pipe(
        map((response: any) => {
          this.toastr.success(`Bookmarked ${item?.name} successfully`);
          return response;
        }),
        catchError((err: any) => {
          this.toastr.error(`Failed to bookmark ${item?.name}`);
          return throwError(err);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  /**
   * check whether item was bookmarked
   *
   * @param item - {any} result item
   * @return - {boolean}
   */
  public isBookmarked(item: any) {
    const filtered = this.bookmarks.filter((res) => {
      return res.id === item.id;
    });
    return filtered.length;
  }

  /**
   * bookmarks getter
   *
   * @return - {Array<any>}
   */
  private get bookmarks() {
    return this.searchService.getBookmarks();
  }

}
