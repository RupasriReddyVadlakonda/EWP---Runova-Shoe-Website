import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shoe } from './shoe.service';

@Component({
  selector: 'app-shoe-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="{ out: shoe.stock === 0 }">
      <h3>{{ shoe.name }}</h3>
      <p>{{ shoe.brand }} | {{ shoe.category }} | {{ shoe.gender }}</p>
      <p>Size {{ shoe.size }} | {{ shoe.color }}</p>
      <p [style.color]="shoe.price > 8000 ? 'crimson' : 'green'">Rs. {{ shoe.price | number }}</p>
      <p *ngIf="shoe.stock > 0; else none">In stock: {{ shoe.stock }}</p>
      <ng-template #none><p><b>Out of stock</b></p></ng-template>
      <button [disabled]="shoe.stock === 0" (click)="add.emit(shoe)">Add to Cart</button>
    </div>`,
  styles: [`
    .card { border:1px solid #999; border-radius:8px; padding:12px; margin:10px; width:230px; display:inline-block; vertical-align:top; }
    .out { opacity:.5; }
    button { background:#c0392b; color:#fff; border:none; padding:8px 14px; border-radius:5px; cursor:pointer; }
    button:disabled { background:#9ca3af; cursor:not-allowed; }
  `]
})
export class ShoeCardComponent {
  @Input() shoe!: Shoe;                       // parent -> child
  @Output() add = new EventEmitter<Shoe>();   // child -> parent
}
