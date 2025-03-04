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

  currentSlide = 0; // Indice du slide visible

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
  }

  techSkills = [
    { name: 'Javascript', level: 'Intermédiaire', icon: 'javascript' },
    { name: 'SQL', level: 'Intermédiaire', icon: 'storage' },
    { name: 'Angular', level: 'Les bases', icon: 'desktop_windows' },
    { name: 'Git', level: 'Intermédiaire', icon: 'web' },
    { name: 'J2EE', level: 'Les bases', icon: 'password' },
    { name: 'UX/UI', level: 'Les bases', icon: 'code' },
  ];  
  humSkills = [
    { name: 'Autonomie', level: 'Intermédiaire', icon: 'code' },
    { name: 'Résolution de problème', level: 'Intermédiaire', icon: 'chat_error' },
    { name: 'Rédaction de document', level: 'Les bases', icon: 'file_present' },
    { name: 'Méthode Agile', level: 'Intermédiaire', icon: 'recycle' },
  ]; 

  experiences = [
    { title: 'Alternant Developpeur junior', company: 'CGI', link: '#' },
    { title: 'Stage en développement web', company: 'CGI', link: '#' },
    { title: 'Bachelor Ingenierie Logiciel', company: 'ESIEA : Etxe Logistika', link: '#' },
    { title: 'Licence CCRSEE', company: 'La Digital School, BREST', link: '#' },
    { title: 'BTS CRSA', company: 'CFA de METZ', link: '#' },
    { title: 'Bac Scientifique', company: 'Lycée de la communication, METZ', link: '#' }
  ];

  categories = ['Tous', 'Web', 'Prototype Figma', 'Design'];
  selectedCategory = 'Tous';

  projects = [
    { title: 'Application mobile Blue Ice', category: 'Web', image: 'assets/java.png', link: '#' },
    { title: 'Application web Link&Trade', category: 'Design', image: 'assets/java.png', link: '#' },
    { title: 'Application Windows Simpl-E', category: 'Prototype Figma', image: 'assets/java.png', link: '#' },
    { title: 'Projet IT Grand Angle', category: 'Web', image: 'assets/java.png', link: '#' },
    { title: 'Projet IT En cours', category: 'Web', image: 'assets/java.png', link: '#' }
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


