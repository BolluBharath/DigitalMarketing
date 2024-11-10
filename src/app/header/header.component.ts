import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('pulseAnimation', [
      state('pulse', style({ transform: 'scale(1.05)' })),
      transition('* => pulse', [animate('0.3s ease-in-out')]),
      transition('pulse => *', [animate('0.3s ease-in-out')])
    ]),
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent {

  navItems = [
    { route: '/home', label: 'Home' },
    { route: '/about', label: 'About' },
    { route: '/services', label: 'Services' },
    { route: '/contact', label: 'Contact' }
  ];
}
