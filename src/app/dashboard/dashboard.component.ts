import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    /*document.addEventListener("keydown", function(e) {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
          e.preventDefault();
      }
    });*/
    
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault(); // Bloque clic droit
    });
  }

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
