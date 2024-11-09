import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink,CommonModule],
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    '/src/styles.css'
  ],
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        transform: 'translateY(20px)',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.6s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('scaleIn', [
      state('void', style({
        transform: 'scale(0.9)',
        opacity: 0
      })),
      transition(':enter', [
        animate('0.5s ease-out', style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class AboutComponent {
  services: Service[] = [
    {
      icon: 'bi-rocket-takeoff',
      title: 'Digital Marketing Strategy',
      description: 'Develop comprehensive digital marketing strategies tailored to your business goals, target audience, and market dynamics.',
      color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    {
      icon: 'bi-search',
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in search engines with our data-driven SEO strategies and technical optimization.',
      color: 'linear-gradient(135deg, #4E54C8, #8F94FB)'
    },
    {
      icon: 'bi-laptop',
      title: 'Website Design',
      description: 'Create stunning, responsive websites that engage visitors and convert them into customers.',
      color: 'linear-gradient(135deg, #11998e, #38ef7d)'
    },
    {
      icon: 'bi-phone',
      title: 'App Development',
      description: 'Build powerful, user-friendly mobile applications that extend your digital presence to all platforms.',
      color: 'linear-gradient(135deg, #FC466B, #3F5EFB)'
    },
    {
      icon: 'bi-share',
      title: 'Social Media Management',
      description: 'Engage your audience and build brand awareness through strategic social media marketing and content creation.',
      color: 'linear-gradient(135deg, #45B649, #DCE35B)'
    },
    {
      icon: 'bi-palette',
      title: 'Graphic Design',
      description: 'Design eye-catching visuals that communicate your brand message and captivate your target audience.',
      color: 'linear-gradient(135deg, #FF3CAC, #784BA0)'
    },
    {
      icon: 'bi-bullseye',
      title: 'Lead Generation',
      description: 'Implement effective strategies to attract and convert qualified leads for your business growth.',
      color: 'linear-gradient(135deg, #2193b0, #6dd5ed)'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Sales Growth',
      description: 'Drive revenue through optimized sales funnels and conversion rate optimization strategies.',
      color: 'linear-gradient(135deg, #ee0979, #ff6a00)'
    }
  ];
  particles: any[] = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Digital Marketing Agency - About Us')
  }

  ngOnInit() {
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
}
