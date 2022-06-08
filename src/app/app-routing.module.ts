import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'addItem',
    component: AddItemComponent,
    canActivate : [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: 'catalogue',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
