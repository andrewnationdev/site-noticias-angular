import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api';
import { IPost } from '../../data/types/schema';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

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

  post = signal<IPost | null>(null);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getPostById(id).subscribe({
        next: (res) => {
          this.post.set(res);
          this.isLoading.set(false);
          
          setTimeout(() => {
            const postBody = document.getElementById("post-body");
            if(postBody) {
              postBody.innerHTML = res.content;
            }
          }, 0);
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
    
    const data: IPost[] = JSON.parse(storage);
    if (data.length > 0) {
      return data.some(item => item.id == id);
    }
    return false;
  }

  handleShare(){
    const url = window.location.href;

    navigator.clipboard.writeText(url);

    Swal.fire({
      title: 'Link copiado para a área de transferência!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    })
  }

  handleAddToFavorites(curr_post: IPost) {
    if (!curr_post) return;
    try {
      const storage = localStorage.getItem("favs");
      let favs: IPost[] = storage ? JSON.parse(storage) : [];
      const exists = favs.some(item => item.id === curr_post.id);

      if (!exists) {
        favs.push(curr_post);
        localStorage.setItem("favs", JSON.stringify(favs));
        Swal.fire({
          title: 'Salvo nos favoritos!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: 'Este artigo já está nos favoritos!',
          icon: 'info',
          timer: 2000,
          showConfirmButton: false,
        })
      }
    } catch (err) {
      localStorage.setItem("favs", JSON.stringify([curr_post]));
    }
  }
}