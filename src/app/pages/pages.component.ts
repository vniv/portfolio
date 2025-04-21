import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  @ViewChild('skillsContainer', { static: true }) skillsContainer!: ElementRef;  // Référence à l'élément HTML

  logos = [
    'assets/cgoLogo.jpg',
    'assets/EsieaLogo.png',
    'assets/EtxeLogo.png',
    'assets/SimpleLogo.png',
    'assets/BlueiceLogo.png',
    'assets/BordaLogo.png',
    'assets/html5.svg',
    'assets/css3.svg',
  ];

  // Les valeurs initiales des compétences
  skills = [
    { name: 'JAVA', value: 85, currentValue: 0, color:'#E44D26', icon:'assets/skills/javascript.svg' },
    { name: 'SQL', value: 75, currentValue: 0, color:'#264de4', icon:'assets/skills/sql.svg' },
    { name: 'ANGULAR', value: 60, currentValue: 0, color:'#4F5B93', icon:'assets/skills/angular.svg' },
    { name: 'GIT', value: 50, currentValue: 0, color:'#21759B', icon:'assets/skills/git.svg' },
    { name: 'TESTING', value: 45, currentValue: 0, color:'#00758F', icon:'assets/skills/j2ee.svg' },
    { name: 'UX/UI', value: 90, currentValue: 0, color:'#E76F00', icon:'assets/skills/html5.svg' },
    { name: 'AGILITE', value: 85, currentValue: 0, color:'#222', icon:'assets/skills/agilite.svg' },
    { name: 'RESOLUTION DE PROBLEME', value: 70, currentValue: 0, color:'#F7DF1E', icon:'assets/skills/problem-solving.svg' },
    { name: 'REDACTION DE DOCUMENT', value: 55, currentValue: 0, color:'#E44D26', icon:'assets/skills/document-writing.svg' },
    { name: 'AUTONOMIE', value: 80, currentValue: 0, color:'#E44D26', icon:'assets/skills/autonomy.svg' }
  ];
  

  currentSlide = 0; // Indice du slide visible

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
  }

  techSkills = [
    { name: 'Javascript', level: 'Intermédiaire', icon:'assets/skills/javascript.svg' },
    { name: 'SQL', level: 'Intermédiaire', icon:'assets/skills/sql.png'  },
    { name: 'Angular', level: 'Les bases', color:'#4F5B93', icon:'assets/skills/angular.png' },
    { name: 'Git', level: 'Intermédiaire', icon:'assets/skills/git.png' },
    { name: 'Tests unitaires / fonctionnels', level: 'Les bases', icon:'assets/skills/tutf.png'},
    { name: 'UX/UI', level: 'Les bases', icon:'assets/skills/uxui.png' },
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
    { id: 2,title: 'Blue Ice', overlayText: 'Description du projet 1', category: 'Formation', image: 'assets/projects/blueice.mp4', link: '#', },
    { id: 1,title: 'Link&Trade', overlayText: 'Description du projet 1', category: 'Formation', image: 'assets/projects/link&trade.mp4', link: '#' },
    { id: 5,title: 'Simpl-E', overlayText: 'Description du projet 1', category: 'Formation', image: 'assets/projects/simple.mp4', link: '#' },
    { id: 3,title: 'Grand Angle', overlayText: 'Description du projet 1', category: 'Entreprise', image: 'assets/projects/grandangle.mp4', link: '#' },
    { id: 4,title: 'TCG Card', overlayText: 'Description du projet 1', category: 'Entreprise', image: 'assets/projects/perso.mp4', link: '#' }
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

  onVideoError() {
    console.error('Erreur lors du chargement de la vidéo');
  }

  routeToReal(id: number) {
    this.router.navigate([`/realisations/${id}`]);
  }

  @ViewChildren('videoRef') videos!: QueryList<ElementRef<HTMLVideoElement>>;
  ngAfterViewInit() {
    this.videos.forEach(videoEl => {
      const el = videoEl.nativeElement;
      el.muted = true; // Certains navigateurs demandent ça même si déjà dans le HTML
      el.play().catch(err => {
        console.warn('Autoplay bloqué :', err);
      });
    });
  }
}


