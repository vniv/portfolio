import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class PagesComponent implements OnInit {

  @ViewChild('skillsContainer', { static: true }) skillsContainer!: ElementRef;  // Référence à l'élément HTML

  // Les valeurs initiales des compétences
  skills = [
    { name: 'JAVA', value: 85, currentValue: 0 },
    { name: 'SQL', value: 75, currentValue: 0 },
    { name: 'ANGULAR', value: 60, currentValue: 0 },
    { name: 'GIT', value: 50, currentValue: 0 },
    { name: 'J2EE', value: 45, currentValue: 0 },
    { name: 'UX/UI', value: 90, currentValue: 0 },
    { name: 'AGILITE', value: 85, currentValue: 0 },
    { name: 'RESOLUTION DE PROBLEME', value: 70, currentValue: 0 },
    { name: 'REDACTION DE DOCUMENT', value: 55, currentValue: 0 },
    { name: 'AUTONOMIE', value: 80, currentValue: 0 }
  ];

  experiences = [
    { title: 'Stage en développement web', company: 'Nicolas CAISSO, Distanciel', link: '#' },
    { title: 'Création d’une micro-entreprise', company: 'Etabli 79, QUIMPER', link: '#' },
    { title: 'Employée polyvalente', company: 'Cornouaille Diffusion, ERGUÉ GABERIC', link: '#' },
    { title: 'Apprentie coiffeuse', company: 'Passage bleu, METZ', link: '#' },
    { title: 'Bac +2 Développeur Web', company: 'La Digital School, BREST', link: '#' },
    { title: 'CAP Coiffure', company: 'CFA de METZ', link: '#' },
    { title: 'Bac Littéraire', company: 'Lycée de la communication, METZ', link: '#' }
  ];

  categories = ['Tous', 'Web', 'Prototype Figma', 'Design'];
  selectedCategory = 'Tous';

  projects = [
    { title: 'Maquette Bed & Desk', category: 'Web', image: 'assets/java.png', link: '#' },
    { title: 'Gameboy en 3D avec Blender', category: 'Design', image: 'assets/java.png', link: '#' },
    { title: 'Application "Ma Gallery"', category: 'Prototype Figma', image: 'assets/java.png', link: '#' },
    { title: 'Site Jonti Wild', category: 'Web', image: 'assets/java.png', link: '#' }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'Tous') return this.projects;
    return this.projects.filter(proj => proj.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  hoveredSkill: any = null;

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    // Configuration de l'IntersectionObserver
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateProgressBars();  // Lancer l'animation lorsque l'élément est visible
          this.observer.disconnect();  // Stopper l'observateur après l'animation
        }
      });
    }, { threshold: 0.1 }); // Déclencher quand 10% de l'élément est visible

    // Observer l'élément skillsContainer
    this.observer.observe(this.skillsContainer.nativeElement);
  }

  animateProgressBars(): void {
    this.skills.forEach(skill => {
      let interval = setInterval(() => {
        if (skill.currentValue < skill.value) {
          skill.currentValue++;
        } else {
          clearInterval(interval); // Stop l'intervalle lorsque la valeur cible est atteinte
        }
      }, 20); // Ajustez la vitesse de l'animation ici
    });
  }
}

