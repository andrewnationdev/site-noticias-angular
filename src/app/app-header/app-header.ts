import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  favoritesCount: number = 0;
  appTitle: string = "O Periódico";

  ngOnInit() {
    const storage = localStorage.getItem("favs");

    if (storage) {
      const data = JSON.parse(storage);
      this.favoritesCount = data.length;

      console.log(data, data.length)
    }
  }
}
