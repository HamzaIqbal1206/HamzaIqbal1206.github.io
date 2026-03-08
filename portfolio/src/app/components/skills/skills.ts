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
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', '8086 Assembly'],
    },
    {
      name: 'Frontend',
      icon: 'fas fa-palette',
      skills: ['Angular 21', 'Angular 18', 'React 18', 'Angular Material', 'Tailwind CSS 3', 'SCSS', 'Chart.js'],
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: ['Node.js', 'Express', 'FastAPI', 'Socket.IO', 'Nodemailer', 'Google APIs'],
    },
    {
      name: 'AI/ML',
      icon: 'fas fa-brain',
      skills: ['PyTorch', 'Hugging Face Transformers', 'scikit-learn', 'XGBoost', 'WhisperX', 'Faster-Whisper', 'pyannote', 'LangChain', 'Gemini'],
    },
    {
      name: 'Databases & Tools',
      icon: 'fas fa-tools',
      skills: ['MS SQL Server', 'SSMS', 'Docker Compose', 'Vite', 'Git', 'Qt Framework', 'SFML', 'NASM', 'DOSBox'],
    },
    {
      name: 'Soft Skills',
      icon: 'fas fa-users',
      skills: ['Teamwork', 'Leadership', 'Time Management', 'Effective Communication', 'Critical Thinking'],
    },
  ];
}
