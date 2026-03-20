import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppHeader } from './app/app-header/app-header';
import { AppFooter } from './app/app-footer/app-footer';
import { RouterOutlet, RouterLink } from '@angular/router';
import {routes} from '../app.routes'
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AppHeader, AppFooter, RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
