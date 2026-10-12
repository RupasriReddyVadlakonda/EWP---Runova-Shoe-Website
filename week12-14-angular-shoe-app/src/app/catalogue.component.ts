import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoeService, Shoe } from './shoe.service';
import { ShoeCardComponent } from './shoe-card.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule, ShoeCardComponent],
  template: `
    <h2>Shoe Catalogue</h2>
    <input [(ngModel)]="search" placeholder="Search name or brand">
    <select [(ngModel)]="category">
      <option value="">All Categories</option>
      <option>Sports</option><option>Running</option>
      <option>Casual</option><option>Sneakers</option>
    </select>
    <span> Cart items: {{ cartCount }}</span>

    <div>
      <app-shoe-card *ngFor="let s of filtered()" [shoe]="s" (add)="addToCart($event)"></app-shoe-card>
    </div>
    <p *ngIf="filtered().length === 0">No shoes found.</p>`
})
export class CatalogueComponent {
  search = '';
  category = '';
  cartCount = 0;

  constructor(private svc: ShoeService) {
    this.svc.cart$.subscribe(c => this.cartCount = c.length);
  }

  filtered(): Shoe[] {
    const q = this.search.toLowerCase();
    return this.svc.getShoes().filter(s =>
      (s.name.toLowerCase().includes(q) || s.brand.toLowerCase().includes(q)) &&
      (!this.category || s.category === this.category));
  }

  addToCart(s: Shoe): void { this.svc.addToCart(s); }
}
