import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: 'fas fa-code',
      skills: ['TypeScript', 'JavaScript', 'C++', 'Python', 'Java', 'SQL', 'Assembly'],
    },
    {
      name: 'Frontend',
      icon: 'fas fa-palette',
      skills: ['Angular', 'React', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'SCSS'],
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: ['Node.js', 'Express', 'MSSQL', 'MySQL'],
    },
    {
      name: 'AI/ML',
      icon: 'fas fa-brain',
      skills: ['PyTorch', 'Whisper', 'WhisperX', 'Pyannote', 'FasterWhisper'],
    },
    {
      name: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: ['Git', 'Docker', 'Jira', 'Qt Framework', 'SFML'],
    },
    {
      name: 'Soft Skills',
      icon: 'fas fa-users',
      skills: ['Teamwork', 'Leadership', 'Time Management', 'Effective Communication', 'Critical Thinking'],
    },
  ];
}
