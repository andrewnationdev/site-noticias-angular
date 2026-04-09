import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router'
import {Post} from '../../data/types/post';
 
@Component({
  selector: 'app-post-summary',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './post-summary.html',
  styleUrl: './post-summary.css',
})

export class PostSummary {
  @Input() post!: Post;

  getReadingTime = (content:string) => {
    const wpm = 200;
    const words = content.split(/\s+/g).length;
    return Math.ceil(words / wpm);
  }
}
