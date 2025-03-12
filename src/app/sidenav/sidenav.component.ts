import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { RouterLinkActive } from '@angular/router';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('350ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(1turn)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  private lastScrollTop = 0;
  @ViewChild('sidenav') sidenav!: ElementRef;  // Référence à l'élément .sidenav
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('routerActive') routerLinkActive!: RouterLinkActive;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window.resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scroll vers le bas → Ouvrir la navbar
      this.collapsed = false;
      this.changeBackgroundColor('rgba(108, 91, 123, 1)');
    } else if (currentScroll == 0) {
      this.changeBackgroundColor('rgba(108, 91, 123, 0)');
      this.toggleCollapse();
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Empêcher les valeurs négatives
  }

  // Méthode pour changer la couleur de fond avec Renderer2
  private changeBackgroundColor(color: string): void {
    if (this.sidenav) {
      this.renderer.setStyle(this.sidenav.nativeElement, 'background', color);
    }
  }
}
