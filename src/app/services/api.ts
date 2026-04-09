import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SETTINGS } from '../../data/settings';
import { IPost } from '../../data/types/schema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private readonly API_URL = SETTINGS.API.BASE_URL;

  getPostById(id: string): Observable<IPost> {
  return this.http.get<IPost>(`${this.API_URL+SETTINGS.API.POST}${id}`);
}

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL + SETTINGS.API.ALL_POSTS);
  }
}