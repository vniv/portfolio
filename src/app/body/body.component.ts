import { Component, HostListener, Input } from '@angular/core';
import { experienceData } from './dataExperience';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor(private router: Router) {}

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

  routeToComp(id?: number) {
    this.router.navigate([`/competences/${id}`]);
  }
}
