import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.success = false;
    const formValue = this.contactForm.value;
    const templateParams = {
      name: formValue.fullName,
      email: formValue.email,
      title: formValue.subject,
      message: formValue.message,
    };
    try {
      await emailjs.send(
        'service_3wpim8p',
        'template_9amthl9',
        templateParams,
        'i1cXs-775e3Q-E1OX'
      );
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
    } catch (error) {
      this.success = false;
      alert('Failed to send message. Please try again.');
    }
  }
}
