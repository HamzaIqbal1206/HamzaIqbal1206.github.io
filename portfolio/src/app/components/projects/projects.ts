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
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      name: 'ShieldX Antivirus',
      description:
        'Product website for ShieldX Antivirus built with React, TypeScript, and Vite. Includes animated, responsive marketing pages for features, pricing, team, careers, download, changelog, contact, and policy/legal sections, using Tailwind CSS, Framer Motion, React Router, and shadcn/ui components.',
      techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'shadcn/ui'],
      github: 'https://github.com/HamzaIqbal1206/ShieldX',
      image: '',
      featured: true,
      date: 'March 2026',
    },
    {
      name: 'FlexPlus',
      description:
        'UI/UX student portal prototype built with Angular 18 and Tailwind CSS for demonstration and usability testing. Features responsive desktop/mobile layouts, auth screens, dashboard analytics, academics and finance modules, communication pages, profile settings, and static hardcoded data without backend/API integration.',
      techStack: ['Angular 18', 'Tailwind CSS 3', 'TypeScript', 'Angular CLI', 'Vite'],
      github: 'https://github.com/HamzaIqbal1206/FlexPlus',
      image: '',
      featured: true,
      date: 'February 2026',
    },
    {
      name: 'Diarization',
      description:
        'End-to-end speaker diarization workspace with an Angular frontend and FastAPI backend, supporting Faster-Whisper + pyannote and WhisperX + pyannote pipelines. Users can upload audio, select pipeline and speaker range, run diarization, and review transcripts/segments, with Docker Compose support for full-stack local deployment.',
      techStack: ['FastAPI', 'Angular', 'Faster-Whisper', 'WhisperX', 'pyannote', 'Docker Compose'],
      github: 'https://github.com/HamzaIqbal1206/Diarization',
      image: '',
      featured: true,
      date: 'February 2026',
    },
    {
      name: 'Comparative Analysis of ML Models for Emotion Classification in Song Lyrics',
      description:
        'Research-driven NLP study benchmarking classical ML, hybrid embedding-based pipelines, and fine-tuned transformer models for emotion classification across lyrics and GoEmotions datasets. Includes a 17-step TF-IDF ablation workflow, reproducible training scripts, confusion matrices, learning curves, and classification reports, showing that dataset quality and linguistic style can impact performance more than model complexity.',
      techStack: ['Python', 'PyTorch', 'HuggingFace', 'scikit-learn', 'XGBoost'],
      github: 'https://github.com/mamoon-17/Emotion-Classification-Study',
      image: '',
      featured: true,
      date: 'December 2025',
    },
    {
      name: 'Clarity',
      description:
        'Collaborative productivity app built with Angular and Socket.IO for real-time teamwork. Supports project/task management, dashboard analytics, AI-assisted workflows via Gemini and LangChain, Google OAuth integrations (Gmail, Calendar, Contacts), and email notifications for upcoming tasks.',
      techStack: ['Angular 21', 'Angular Material', 'Socket.IO', 'Node.js', 'Express', 'TypeScript', 'LangChain', 'Gemini', 'Chart.js', 'Google APIs', 'Nodemailer'],
      github: 'https://github.com/WyvRacersDev/Clarity',
      image: '',
      featured: true,
      date: 'December 2025',
    },
    {
      name: 'CourseMate',
      description:
        'Full-stack Course Registration Management System built with React, Node.js/Express, and Microsoft SQL Server. Supports secure student authentication, prerequisite and seat validation, schedule conflict checks, admin course/section management, add-drop workflows, reciprocal swap handling, and SQL-driven registration constraints for repeat and summer enrollments.',
      techStack: ['React', 'Node.js', 'Express', 'MS SQL Server', 'SSMS'],
      github: 'https://github.com/waheedsarem/CourseMate',
      image: '',
      featured: true,
      date: 'April 2025',
    },
    {
      name: 'Flappy Bird 8086',
      description:
        'Text-mode Flappy Bird clone in 8086 Assembly for DOS .COM binaries. Renders directly to VGA text memory (0xB800), hooks custom keyboard (INT 09h) and timer (INT 08h) ISRs for controls/game ticks, includes start/instructions/pause/game-over screens, PC speaker music, and ships with base and VSync variants for smoother visuals in DOSBox.',
      techStack: ['8086 Assembly', 'NASM', 'DOSBox'],
      github: 'https://github.com/Bilal-Kashif2006/flappy-bird-8086',
      image: '',
      featured: true,
      date: 'December 2024',
    },
    {
      name: 'Music Player',
      description:
        'C++ and Qt-based desktop music player. Provides seamless playback, playlist navigation, shuffle/repeat modes, volume and speed controls, timeline seeking, real-time elapsed/remaining time updates, track properties, and multi-format support including .mp3 and .wav.',
      techStack: ['C++', 'Qt Framework', 'Qt Creator'],
      github: 'https://github.com/waheedsarem/MUSICPlayer',
      image: '',
      featured: false,
      date: 'May 2024',
    },
    {
      name: 'Dots and Boxes',
      description:
        'Polished desktop version of the classic Dots and Boxes game built with C++17 and SFML 2.x. Includes 2-player local gameplay, player name entry, turn-based scoring with extra turns on completed boxes, animated line placement and box fill effects, pause/resume overlay UI, background music with mute toggle, and a winner screen with restart support.',
      techStack: ['C++', 'SFML'],
      github: 'https://github.com/waheedsarem/DotandBoxes',
      image: '',
      featured: false,
      date: 'December 2023',
    },
  ];

  private readonly readmeDetailsByProject: Record<string, string> = {
    'ShieldX Antivirus': `ShieldX Antivirus

Slogan
Protect. Detect. Secure.

Overview
React + Vite product website for ShieldX Antivirus with responsive marketing pages and modern UI motion.

Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- shadcn/ui

Scripts
- npm run dev
- npm run build
- npm run preview
- npm run lint
- npm run test

Routes
/, /features, /pricing, /team, /about, /download, /changelog, /careers, /contact, /privacy-policy, /terms-of-service, /security-standards`,

    FlexPlus: `FlexPlus — Student Portal Frontend Prototype

Note
UI/UX prototype for demo and usability testing only. No backend/API; data is static.

Overview
Angular 18 + Tailwind CSS student portal with desktop sidebar and mobile bottom navigation.

Tech Stack
- Angular 18 (standalone components)
- Tailwind CSS 3
- Sora + Manrope fonts
- Angular CLI / Vite

Main Screens
Login, Dashboard, Course Registration, Marks, Attendance, Fees, Transcript, Messages, Forum, Notifications, Profile

Run
- npm install
- npm start
- npm run build`,

    Diarization: `Diarization Workspace

Overview
End-to-end speaker diarization app with:
- backend/: FastAPI API
- frontend/: Angular UI
- pipelines/fasterwhisper/: Faster-Whisper + pyannote
- pipelines/whisperx/: WhisperX + pyannote

Services
- Frontend: http://localhost:4200
- Backend: http://localhost:8000

Requirements
- Python 3.10+
- Node.js + npm
- Docker Desktop
- Hugging Face token (pyannote model access)

Run (recommended)
- docker compose up --build
- docker compose down

Run without Docker
- Backend: uvicorn main:app --host 0.0.0.0 --port 8000
- Frontend: npm install && npm start`,

    'Comparative Analysis of ML Models for Emotion Classification in Song Lyrics': `Comparative Analysis of ML Models for Emotion Classification in Song Lyrics

Overview
NLP research project benchmarking classical ML, hybrid embedding pipelines, and transformer fine-tuning across two datasets with different language styles.

Model Families
1) Classical: TF-IDF + LR/SVM/XGBoost + voting ensemble (17-step ablation)
2) Hybrid: Transformer embeddings + classical classifiers
3) LLM: Fine-tuned DistilRoBERTa, RoBERTa, DeBERTa, BERT variants

Datasets
- Song lyrics dataset (figurative language)
- GoEmotions subset (literal conversational text)

Key Insight
Dataset quality and linguistic style influenced performance more than model complexity.

Outputs
Confusion matrices, training curves, classification reports, and final metrics.`,

    Clarity: `Clarity

Overview
Collaborative productivity app built with Angular and Socket.IO for projects, tasks, analytics, and AI-assisted workflows.

Features
- Real-time collaboration (Socket.IO)
- Project and task management
- Analytics dashboards
- AI assistant via LangChain + Gemini
- Google OAuth integrations (Gmail, Calendar, Contacts)
- Upcoming-task email notifications

Structure
- angular+socket/chat-frontend
- angular+socket/socket-server
- angular+socket/shared_models

Run
- Backend: npx tsx socket-server/server.ts
- Frontend: npm start`,

    CourseMate: `CourseMate

Overview
Full-stack course registration management system using React, Node/Express, and MS SQL Server.

Core Features
- Secure student registration/login
- Prerequisite and seat validation
- Schedule conflict checks
- Admin course/section management
- Add/drop and swap workflows
- SQL-driven constraints for repeats and summer enrollment rules

Project Layout
- frontend/
- Backend/
- Schema.sql
- Swapper Trigger and Sample Inserts.sql`,

    'Flappy Bird 8086': `Flappy Bird 8086

Overview
Text-mode Flappy Bird clone in 8086 Assembly for DOS .COM binaries.

Technical Highlights
- VGA text memory rendering (0xB800)
- Custom keyboard ISR (INT 09h)
- Custom timer ISR (INT 08h)
- Gameplay screens: start/instructions/pause/game over
- PC speaker music integration
- Base and VSync builds

Build
- nasm -f bin src/flappy_base.asm -o build/flappy.com
- nasm -f bin src/flappy_vsync.asm -o build/pvsync.com`,

    'Music Player': `Music Player

Overview
C++ and Qt desktop music player focused on playback and playlist usability.

Features
- Play/pause/shuffle/repeat
- Playlist navigation
- Volume, mute, and playback speed control
- Timeline seek bar
- Track metadata/properties
- Multi-format support (.mp3, .wav)
- Real-time elapsed/remaining time updates`,

    'Dots and Boxes': `Dots and Boxes (C++ + SFML)

Overview
Polished desktop Dots and Boxes game in C++17 with SFML 2.x.

Features
- 2-player local gameplay
- Player name entry
- Turn-based scoring with extra turns on completed boxes
- Animated line and box-fill effects
- Pause/resume overlay
- Background music with mute toggle
- Winner screen with restart support

Build/Run
- make
- make run
- make clean`,
  };

  openReadme(project: Project): void {
    this.selectedProject = project;
  }

  closeReadme(): void {
    this.selectedProject = null;
  }

  getReadmeDetails(project: Project): string {
    return this.readmeDetailsByProject[project.name] ?? project.description;
  }
}
