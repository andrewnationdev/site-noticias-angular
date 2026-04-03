import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-viewer',
  imports: [],
  templateUrl: './post-viewer.html',
  styleUrl: './post-viewer.css',
})
export class PostViewer {
  @Input() id?:string;

  handleAddToFavorite(){
    try {
      let data = localStorage.getItem("favs");

      window.alert(this.id);

      if(data){
        window.alert("Data loaded");
      }
      else localStorage.setItem("favs", JSON.stringify([]))
    } catch(err){

    }
  }
}
