import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { realisations } from './realisations';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent {

  id: string | null = null;
  real: any;
  dataReals = realisations; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.real = this.getExperienceById(this.id);
    });
  }

  private getExperienceById(id: string | null) {
    if (id) {
      const idComp = Number(id); // Conversion en nombre
      return this.dataReals.find(exp => exp.id === idComp); // Comparaison correcte
    }
    return undefined;
  }

  routeToComp(id: number) {
    this.router.navigate([`/competences/${id}`]);
  }
}
