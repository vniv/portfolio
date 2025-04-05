import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { CoupensComponent } from './coupens/coupens.component';
import { CompetenceComponent } from './competence/competence.component';
import { RealisationComponent } from './realisation/realisation.component';
import { PresentationComponent } from './test/test.component';
import { RealisationsComponent } from './realisations/realisations.component';

const routes: Routes = [
  { path: 'appbar', component: DashboardComponent },
  { path: 'dashboard', component: SidenavComponent },
  { path: 'competences', component: ProductsComponent },
  { path: 'competences/:id', component: CompetenceComponent },
  { path: 'realisations/:id', component: RealisationComponent },
  { path: 'realisations', component: RealisationsComponent},
  { path: 'apropos', component: CoupensComponent },
  { path: 'test', component: PresentationComponent },
  { path: 'pages', component: PagesComponent },
  { path: '', component: StatisticsComponent },
  { path: '**', component: StatisticsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
