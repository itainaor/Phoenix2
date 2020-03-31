import { Component, OnInit } from '@angular/core';
import {CONSTANTS} from '../../constans';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public imgPath = environment.imgPath;

  // initiate navbar items
  public navItems = [
    {
      displayName: 'Home',
      path: CONSTANTS.ROUTES.SEARCH,
      exact: true
    },
    {
      displayName: 'Bookmarks',
      path: CONSTANTS.ROUTES.BOOKMARKS,
      exact: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
