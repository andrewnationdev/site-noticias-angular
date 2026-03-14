import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppHeader } from './app/app-header/app-header';
import { AppFooter } from './app/app-footer/app-footer';
import { PostViewer } from './app/post-viewer/post-viewer';

@Component({
  selector: 'app-root',
  imports: [AppHeader, AppFooter, PostViewer],
  template: `
    <app-header></app-header>
    <app-post-viewer></app-post-viewer>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
