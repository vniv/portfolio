import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  bubbles = Array.from({ length: 30 }, () => ({
    style: {
      '--size': `${this.random(2, 6)}rem`,
      '--distance': `${this.random(6, 10)}rem`,
      '--position': `${this.random(0, 100)}%`,
      '--time': `${this.random(2, 4)}s`,
      '--delay': `-${this.random(0, 4)}s`
    }
  }));

  random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

}
