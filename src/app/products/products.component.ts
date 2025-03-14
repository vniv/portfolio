import { Component } from '@angular/core';
import { competences } from './competences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private router: Router) {}

  compsData = competences;

  routeToComp(id: number) {
    this.router.navigate([`/competences/${id}`]);
  }
}
