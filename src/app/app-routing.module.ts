import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component'
import { OrderCheckComponent } from './order-check/order-check.component'

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'check', component: OrderCheckComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
