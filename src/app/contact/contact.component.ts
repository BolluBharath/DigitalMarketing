import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [ReactiveFormsModule,CommonModule],
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
    ])
  ]
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    {
      icon: 'bi-envelope-paper-heart-fill',
      title: 'Email Us',
      value: 'contact@digivate.com',
      link: 'mailto:contact@digivate.com',
      color: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    {
      icon: 'bi-telephone-outbound-fill',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'linear-gradient(135deg, #4E54C8, #8F94FB)'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      value: '123 Digital Avenue, Tech City, TC 12345',
      color: 'linear-gradient(135deg, #11998e, #38ef7d)'
    },
    {
      icon: 'bi-clock-history',
      title: 'Business Hours',
      value: 'Monday - Friday: 9AM - 6PM',
      color: 'linear-gradient(135deg, #FC466B, #3F5EFB)'
    }
  ];

  socialLinks = [
    { icon: 'bi-linkedin', link: '#', name: 'LinkedIn', color: '#0077B5' },
    { icon: 'bi-twitter', link: '#', name: 'Twitter', color: '#1DA1F2' },
    { icon: 'bi-facebook', link: '#', name: 'Facebook', color: '#4267B2' },
    { icon: 'bi-instagram', link: '#', name: 'Instagram', color: '#E4405F' }
  ];

  particles: any[] = [];
  contactForm: FormGroup;
  countryCodes = ['+91', '+1', '+44', '+61'];
  interestOptions = ['Website Development', 'Brand Consulting', 'Career Coaching', 'Other'];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91', Validators.required],
      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      industry: ['', Validators.required],
      interested: ['', Validators.required]
    });
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

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);
    }
  }
}