import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'bc-app',
  template: `
    <bc-layout>
      <bc-sidenav [open]="showSidenav$ | async">
        <bc-nav-item (navigate)="closeSidenav()"
                     *ngIf="loggedIn$ | async"
                     routerLink="/"
                     icon="book"
                     hint="View your book collection">
          My Collection
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()"
                     *ngIf="loggedIn$ | async"
                     routerLink="/books/find"
                     icon="search"
                     hint="Find your next book">
          Browse Books
        </bc-nav-item>
        <bc-nav-item (navigate)="closeSidenav()"
                     *ngIf="!(loggedIn$|async)">
          Sing in
        </bc-nav-item>
        <bc-nav-item (navigate)="logout()"
                     *ngIf="loggedIn$ | async">
          Sing Out
        </bc-nav-item>
      </bc-sidenav>
      <bc-toolbar (openMenu)="openSidenav()">
        Book Collection
      </bc-toolbar>
      <router-outlet></router-outlet>
    </bc-layout>
  `,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  closeSidenav() {
  }

  logout() {
  }

  openSidenav() {
  }
}
