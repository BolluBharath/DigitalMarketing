import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '/src/styles.css'
  ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.5s 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.5s 0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s 0.6s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('pulseAnimation', [
      state('pulse', style({ transform: 'scale(1.05)' })),
      transition('* => pulse', [animate('0.3s ease-in-out')]),
      transition('pulse => *', [animate('0.3s ease-in-out')])
    ])
  ]
})

export class HomeComponent implements OnInit {
  dynamicText: string = "";
  phrases: string[] = [
    "Digital Marketing.",
    "SEO Optimization.",
    "Website Design.",
    "App Development.",
    "Social Media Management.",
    "Graphic Design.",
    "Lead Generation.",
    "Sales Growth.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;
  particles: any[] = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Digivate | Home');
  }

  ngOnInit(): void {
    this.type();
    this.generateParticles();
  }

  generateParticles() {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 20 + 10) + 's',
        size: Math.random() * 5 + 2 + 'px'
      });
    }
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }
}
