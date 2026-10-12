import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>{{ title }}</h2>
    <p>Find the perfect pair for every step.</p>
    <a routerLink="/catalogue">Browse Shoes</a>`
})
export class HomeComponent {
  title = 'Welcome to StepUp Shoes';
}
