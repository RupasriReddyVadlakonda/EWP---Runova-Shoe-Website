import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a> |
      <a routerLink="/catalogue" routerLinkActive="active">Catalogue</a> |
      <a routerLink="/login" routerLinkActive="active">Login</a> |
      <a routerLink="/register" routerLinkActive="active">Register</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>`,
  styles: ['.active { font-weight: bold; color: #c0392b; }']
})
export class AppComponent {}
