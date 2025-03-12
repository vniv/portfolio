import { Component, HostListener, Input } from '@angular/core';
import { experienceData } from './dataExperience';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  dataReals = experienceData;


  getBodyClass(): string {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const items = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight * 0.8; // Déclenche à 80% de la hauteur de l'écran

    items.forEach((item: any) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        item.classList.add('visible');
      }
    });
  }
}
