import { Routes } from '@angular/router';
import { PostViewer } from './src/app/post-viewer/post-viewer';
import { HomePage } from './src/app/home-page/home-page';
import { FavoritesViewer } from './src/app/favorites-viewer/favorites-viewer'
import { NotFound } from './src/app/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomePage },   
  { path: 'post/:id', component: PostViewer },
  { path: 'favorites', component: FavoritesViewer },
  { path: '**', component: NotFound }
];