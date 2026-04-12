import { Component } from '@angular/core';
import { PostSummary } from "../post-summary/post-summary"
import { Toast } from '../toast/toast'
import { IPost } from '../../data/types/schema';
import { IToast } from '../../data/types/toast';

@Component({
  selector: 'app-favorites-viewer',
  imports: [PostSummary, Toast],
  standalone: true,
  templateUrl: './favorites-viewer.html',
  styleUrl: './favorites-viewer.css',
})

export class FavoritesViewer {
  favorites: IPost[] = [];

  toastProps: IToast = {
    isVisible: false,
    text: "This is a message",
    duration: 5000
  }

  ngOnInit() {
    const storage = localStorage.getItem("favs");
    if (storage) {
      this.favorites = JSON.parse(storage);
    }
  }

  deleteFavorite(id: number) {
    this.favorites = this.favorites.filter(post => post.id !== id);
    localStorage.setItem("favs", JSON.stringify(this.favorites));

    this.toastProps = {
      ...this.toastProps,
      text: "Deletado dos favoritos!",
      isVisible: true,
    };
  }

  deleteAllFavorites(){
    this.favorites = [];
    localStorage.setItem("favs", JSON.stringify([]));
  }
}
