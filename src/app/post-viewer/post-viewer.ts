import { Component } from '@angular/core';

@Component({
  selector: 'app-post-viewer',
  imports: [],
  templateUrl: './post-viewer.html',
  styleUrl: './post-viewer.css',
})
export class PostViewer {
  handleAddToFavorite(){
    try {
      let data = localStorage.getItem("favs");

      if(data){
        window.alert("Data loaded");
      }
      else localStorage.setItem("favs", JSON.stringify([]))
    } catch(err){

    }
  }
}
