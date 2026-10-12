import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Shoe {
  id: string;
  name: string;
  brand: string;
  category: string;
  gender: string;
  size: number;
  color: string;
  price: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ShoeService {
  private shoes: Shoe[] = [
    { id: 'S101', name: 'Air Max 270',           brand: 'Nike',     category: 'Sports',   gender: 'Men',    size: 9,  color: 'Black', price: 8999, stock: 20 },
    { id: 'S102', name: 'Ultraboost 22',         brand: 'Adidas',   category: 'Running',  gender: 'Women',  size: 7,  color: 'White', price: 9999, stock: 15 },
    { id: 'S103', name: 'Suede Classic',         brand: 'Puma',     category: 'Casual',   gender: 'Unisex', size: 8,  color: 'Blue',  price: 5499, stock: 0 },
    { id: 'S104', name: 'Chuck Taylor All Star', brand: 'Converse', category: 'Sneakers', gender: 'Unisex', size: 9,  color: 'Red',   price: 4499, stock: 30 }
  ];

  private cart = new BehaviorSubject<Shoe[]>([]);
  cart$ = this.cart.asObservable();

  getShoes(): Shoe[] { return this.shoes; }
  addToCart(s: Shoe): void { this.cart.next([...this.cart.value, s]); }
}
