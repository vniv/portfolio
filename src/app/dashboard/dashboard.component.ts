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

  /*sendEmail() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(
        'TON_SERVICE_ID',  // Remplace par ton Service ID
        'TON_TEMPLATE_ID', // Remplace par ton Template ID
        formData,
        'TA_PUBLIC_KEY'   // Remplace par ta Public Key
      ).then(
        (response) => {
          console.log('Email envoyé avec succès', response);
          alert('Message envoyé avec succès !');
          this.contactForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l’envoi de l’email', error);
          alert('Une erreur est survenue, réessayez plus tard.');
        }
      );
    }
  }*/

}
