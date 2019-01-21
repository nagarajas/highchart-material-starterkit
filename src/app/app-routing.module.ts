import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaindashboardComponent } from "./maindashboard/maindashboard.component";
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path:"", component:MaindashboardComponent },
  { path:"dashboard", component:MaindashboardComponent},
  { path:"table", component:TableLayoutComponent},
  { path:"address", component: AddressFormComponent},
  { path:"stock", component:StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
