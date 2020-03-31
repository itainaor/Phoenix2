import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchService} from '../../search.service';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public searchGroup: FormGroup;
  public searchControl: FormControl;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // initiate form control
    this.searchControl = new FormControl(this.searchService.getQuery());

    // initiate form group
    this.searchGroup = new FormGroup({
      searchControl: this.searchControl
    });
  }

  /**
   * save query in search service
   */
  public doSearch() {
    this.searchService.setQuery(null);
    setTimeout(() => {
      this.searchService.setQuery(this.searchGroup.controls.searchControl.value);
    }, 0);
  }
}
