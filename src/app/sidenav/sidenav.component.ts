import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';


interface SidenavToggle {
  screenWidth: number;
  collappsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', 
        style({opacity :1}))
      ]),
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', 
        style({opacity :1}))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('350ms', 
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(1turn)', offset: '1'})
        ]))
      ])
    ]),
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window.resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collappsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collappsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() : void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collappsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
