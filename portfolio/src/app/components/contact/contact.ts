import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sending = signal(false);
  sent = signal(false);

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'hamzaiqbal1206@gmail.com',
      link: 'mailto:hamzaiqbal1206@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+92 335 4560466',
      link: 'tel:+923354560466',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: '',
    },
  ];

  async onSubmit() {
    this.sending.set(true);
    // Simulate sending - replace with actual email service
    await new Promise((resolve) => setTimeout(resolve, 1500));
    this.sending.set(false);
    this.sent.set(true);
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.sent.set(false), 4000);
  }
}
