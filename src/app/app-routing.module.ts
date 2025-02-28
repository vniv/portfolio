import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'appbar', component: DashboardComponent },
  { path: 'dashboard', component: SidenavComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'pages', component: PagesComponent },
  { path: '', component: StatisticsComponent },
  { path: '**', component: StatisticsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
