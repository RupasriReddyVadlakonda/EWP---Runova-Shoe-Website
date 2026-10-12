import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Template-driven form
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form #f="ngForm" (ngSubmit)="login(f.value)">
      <input name="email" type="email" ngModel required email #em="ngModel" placeholder="Email"><br>
      <small *ngIf="em.invalid && em.touched" style="color:red">Enter a valid email</small><br>
      <input name="password" type="password" ngModel required minlength="6" #pw="ngModel" placeholder="Password"><br>
      <small *ngIf="pw.invalid && pw.touched" style="color:red">Minimum 6 characters</small><br>
      <button [disabled]="f.invalid">Login</button>
    </form>`
})
export class LoginComponent {
  constructor(private router: Router) {}
  login(v: any): void {
    alert('Logged in as ' + v.email);
    this.router.navigate(['/catalogue']);
  }
}
