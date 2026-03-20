import { Routes } from '@angular/router';
import { PostViewer } from './src/app/post-viewer/post-viewer';
import { HomePage } from './src/app/home-page/home-page';
//import { SobreComponent } from './pages/sobre/sobre.component';
//import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePage }, 
  { path: 'posts', component: PostViewer },
  { path: '**', component: PostViewer }
];