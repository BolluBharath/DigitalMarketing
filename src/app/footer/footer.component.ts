import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('iconAnimation', [
      state('idle', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.1)' })),
      transition('idle <=> hovered', animate('0.2s ease-in-out'))
    ])
  ]
})
export class FooterComponent {
  currentYear!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
  }

}
