import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() {}

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  screenWidth = 0;
  navData = navbarData;
  bAfficherSubmenu = true;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  submenuOpen: { [key: string]: boolean } = {};

  toggleSubmenu(keyToggle: string, event: Event): void {
    event.preventDefault();
    this.submenuOpen[keyToggle] = !this.submenuOpen[keyToggle];
    for (let key in this.submenuOpen) {
      if (key !== keyToggle) {
        this.submenuOpen[key] = false;
      }
    }
  }

  backToggle(): void {
    this.submenuOpen = {};
  }
}
