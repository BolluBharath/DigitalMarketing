import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
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

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);
    }
  }
}