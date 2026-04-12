import { Component } from '@angular/core';
import { PostSummary } from "../post-summary/post-summary"
import { IPost } from '../../data/types/schema';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

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
    Swal.fire({
      title: 'Tem certeza que deseja deletar este favorito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar',
      cancelButtonText: 'Não, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.favorites = this.favorites.filter(post => post.id !== id);
        localStorage.setItem("favs", JSON.stringify(this.favorites));
        Swal.fire({
          title: 'Favorito deletado!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
      }
    })
  }

  deleteAllFavorites(){
    Swal.fire({
      title: 'Tem certeza que deseja deletar todos os favoritos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar',
      cancelButtonText: 'Não, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.favorites = [];
        localStorage.setItem("favs", JSON.stringify([]));
        Swal.fire({
          title: 'Todos os favoritos foram deletados!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
      }
    })
  }
}
