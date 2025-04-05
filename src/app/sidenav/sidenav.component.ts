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

  toggleSubmenu(key: string, event: Event): void {
    event.preventDefault();
    this.submenuOpen[key] = !this.submenuOpen[key];
  }
}
