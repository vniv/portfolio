import { Component } from '@angular/core';
import { realsData } from './dataReal';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent {
  projects = realsData;
}
