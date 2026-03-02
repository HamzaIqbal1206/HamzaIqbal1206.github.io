import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedElement') typedElement!: ElementRef;
  private typed!: Typed;

  ngAfterViewInit() {
    AOS.init({ duration: 800, once: true, offset: 100 });
    this.typed = new Typed(this.typedElement.nativeElement, {
      strings: [
        'Frontend Developer',
        'Angular Enthusiast',
        'React Developer',
        'CS Student',
        'AI/ML Explorer',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}
