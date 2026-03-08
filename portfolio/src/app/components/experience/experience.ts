import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Company',
      duration: 'Oct 2025 - Present',
      description: [
        'Learning Angular framework and building production-ready web applications',
        'Exploring AI/ML to solve practical business problems',
        'Collaborating with cross-functional teams using Agile methodologies',
        'Contributing to frontend architecture and code reviews',
      ],
      icon: 'fas fa-laptop-code',
    },
    {
      title: "Teacher's Assistant",
      company: 'FAST NUCES',
      duration: 'Jan 2026 - Present',
      description: [
        'Assisted professors in conducting lab sessions and tutorials',
        'Helped students debug code and understand complex concepts',
        'Graded assignments and provided constructive feedback',
      ],
      icon: 'fas fa-chalkboard-teacher',
    },
    {
      title: 'Deputy - AI Hackathon',
      company: 'Softec, FAST NUCES',
      duration: 'Present',
      description: [
        'Organized and managed the AI Hackathon event at Softec',
        'Coordinated between participants, judges, and sponsors',
        'Ensured smooth execution of the event logistics',
      ],
      icon: 'fas fa-users',
    },
  ];
}
