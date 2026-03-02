import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  education = [
    {
      degree: 'BS Computer Science',
      institution: 'FAST NUCES',
      location: 'Lahore, Pakistan',
      duration: 'August 2023 - Present',
      gpa: '3.3 / 4.0',
      achievements: [
        "Teacher's Assistant",
        'Deputy for AI Hackathon Event at Softec',
      ],
      icon: 'fas fa-university',
      current: true,
    },
    {
      degree: 'Fsc Pre Medical',
      institution: 'Punjab Group of Colleges',
      location: 'Lahore, Pakistan',
      duration: 'October 2020 - June 2022',
      gpa: '',
      achievements: [],
      icon: 'fas fa-school',
      current: false,
    },
    {
      degree: 'Matriculation',
      institution: 'Divisional Public School Model Town',
      location: 'Lahore, Pakistan',
      duration: 'April 2008 - March 2020',
      gpa: '',
      achievements: [],
      icon: 'fas fa-school',
      current: false,
    },
  ];
}
