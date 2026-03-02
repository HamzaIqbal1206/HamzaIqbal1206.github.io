import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
  image: string;
  featured: boolean;
  date: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'CourseMate',
      description:
        'A full-stack Course Registration Management System with secure student authentication, smart prerequisite validation, schedule conflict detection, and admin course management. Features add/drop functionality, seat tracking, and automated swap requests.',
      techStack: ['React', 'Node.js', 'Express', 'MS SQL Server', 'SSMS'],
      github: 'https://github.com/waheedsarem/CourseMate',
      image: '',
      featured: true,
      date: 'April 2025',
    },
    {
      name: 'Flappy Bird',
      description:
        'Recreated the Flappy Bird game using x86 Assembly, focusing on performance and low-level graphics. The game includes real-time bird movement, gravity simulation, and collision detection with score tracking and a reset option.',
      techStack: ['x86 Assembly', 'VGA Graphics'],
      github: 'https://github.com/HamzaIqbal1206',
      image: '',
      featured: true,
      date: 'December 2024',
    },
    {
      name: 'Music Player',
      description:
        'A C++ and Qt-based desktop music player with seamless playback, playlist management, volume/speed controls, timeline navigation, and multi-format support (.mp3, .wav). Features real-time track info, shuffle, repeat, and a modern user-friendly interface.',
      techStack: ['C++', 'Qt Framework', 'Qt Creator'],
      github: 'https://github.com/waheedsarem/MUSICPlayer',
      image: '',
      featured: false,
      date: 'May 2024',
    },
    {
      name: 'Dots and Boxes Game',
      description:
        'A graphical implementation of the classic Dots and Boxes game. Two players compete by connecting dots on a grid to form boxes, with real-time scoring and an interactive SFML-powered GUI with clickable dots and dynamic line drawing.',
      techStack: ['C++', 'SFML', 'Visual Studio'],
      github: 'https://github.com/waheedsarem/DotandBoxes',
      image: '',
      featured: false,
      date: 'December 2023',
    },
  ];
}
