import { Component } from '@angular/core';
import { PostSummary } from "../post-summary/post-summary"
import { IPost } from '../../data/types/schema';

@Component({
  selector: 'app-favorites-viewer',
  imports: [PostSummary],
  standalone: true,
  templateUrl: './favorites-viewer.html',
  styleUrl: './favorites-viewer.css',
})

export class FavoritesViewer {
  favorites: IPost[] = [];

  ngOnInit() {
    const storage = localStorage.getItem("favs");
    if (storage) {
      this.favorites = JSON.parse(storage);
    }
  }

  deleteFavorite(id: number) {
    this.favorites = this.favorites.filter(post => post.id !== id);
    localStorage.setItem("favs", JSON.stringify(this.favorites));
  }

  deleteAllFavorites(){
    this.favorites = [];
    localStorage.setItem("favs", JSON.stringify([]));
  }
}
