import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-post-viewer',
  standalone: true,
  imports: [],
  templateUrl: './post-viewer.html',
  styleUrl: './post-viewer.css',
})
export class PostViewer implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  post = signal<any>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getPostById(id).subscribe({
        next: (res) => {
          this.post.set(res);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error(err);
          this.isLoading.set(false);
        }
      });
    }
  }

  isInFavorites(id: number) {
    const storage = localStorage.getItem("favs");
    if (!storage) return false;
    
    const data: any[] = JSON.parse(storage);
    if (data.length > 0) {
      return data.some(item => item.id == id);
    }
    return false;
  }

  handleAddToFavorites(curr_post: any) {
    if (!curr_post) return;
    try {
      const storage = localStorage.getItem("favs");
      let favs: any[] = storage ? JSON.parse(storage) : [];
      const exists = favs.some(item => item.id === curr_post.id);

      if (!exists) {
        favs.push(curr_post);
        localStorage.setItem("favs", JSON.stringify(favs));
        window.alert("Artigo salvo nos favoritos!");
      } else {
        window.alert("Este artigo já está salvo.");
      }
    } catch (err) {
      localStorage.setItem("favs", JSON.stringify([curr_post]));
    }
  }
}