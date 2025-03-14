import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { competences } from './competences';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  id: string | null = null;
  comp: any;
  dataComps = competences; // Assure-toi que ça contient des objets avec un `id`

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.comp = this.getExperienceById(this.id);
    });
  }

  private getExperienceById(id: string | null) {
    if (id) {
      const idComp = Number(id); // Conversion en nombre
      return this.dataComps.find(exp => exp.id === idComp); // Comparaison correcte
    }
    return undefined;
  }

  routeToReal(id: number) {
    this.router.navigate([`/realisations/${id}`]);
  }
}
