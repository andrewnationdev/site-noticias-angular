import { Component, OnInit, inject, signal } from '@angular/core';
import { PostSummary } from "../post-summary/post-summary";
import { ApiService } from '../services/api';
import { IPost } from '../../data/types/schema';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PostSummary],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private apiService = inject(ApiService);
  
  articles = signal<IPost[] | []>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe({
      next: (res) => {
        this.articles.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.isLoading.set(false);
      }
    });
  }
}