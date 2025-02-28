import { Component, signal, ViewChild } from '@angular/core';
import { navbarData } from './nav-data';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  nestedMenuOpen = signal(false);

  menuMap = new Map<string, MatMenu>();

  @ViewChild(MatMenu, { static: false }) set matMenu(menu: MatMenu) {
    if (menu) {
      const label = this.navData.find(data => data.items && data.items.length > 0)?.label;
      if (label) {
        this.menuMap.set(label, menu);
      }
    }
  }

  toggleNested(data: any) {
    if (!data.items) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}