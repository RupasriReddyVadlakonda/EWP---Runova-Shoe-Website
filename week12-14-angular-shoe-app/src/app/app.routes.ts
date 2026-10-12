import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CatalogueComponent } from './catalogue.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
