import { Component } from '@angular/core';
import { competences } from './competences';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  compsData = competences;
}
