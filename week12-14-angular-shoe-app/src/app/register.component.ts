import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';

// Reactive form with validation
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Registration</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="fullname" placeholder="Full Name">
      <small *ngIf="c('fullname').invalid && c('fullname').touched" class="err">Min 3 characters</small><br><br>

      <input formControlName="email" placeholder="Email">
      <small *ngIf="c('email').invalid && c('email').touched" class="err">Valid email required</small><br><br>

      <input formControlName="phone" placeholder="Phone (10 digits)">
      <small *ngIf="c('phone').invalid && c('phone').touched" class="err">10 digits required</small><br><br>

      <input type="password" formControlName="password" placeholder="Password">
      <small *ngIf="c('password').invalid && c('password').touched" class="err">Min 6 characters</small><br><br>

      <input type="password" formControlName="confirm" placeholder="Confirm Password">
      <small *ngIf="form.errors?.['mismatch'] && c('confirm').touched" class="err">Passwords do not match</small><br><br>

      <label><input type="checkbox" formControlName="terms"> I agree to Terms</label><br><br>
      <button [disabled]="form.invalid">Register</button>
    </form>
    <pre *ngIf="submitted">{{ submitted | json }}</pre>`,
  styles: ['.err { color: red; }']
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  submitted: any = null;

  form = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  }, {
    validators: (g: AbstractControl) =>
      g.get('password')?.value === g.get('confirm')?.value ? null : { mismatch: true }
  });

  c(name: string) { return this.form.get(name)!; }
  submit(): void { this.submitted = this.form.value; }
}
