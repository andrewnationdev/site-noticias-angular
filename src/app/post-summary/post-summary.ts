import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router'
import {Post} from '../../data/post';
 
@Component({
  selector: 'app-post-summary',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './post-summary.html',
  styleUrl: './post-summary.css',
})

export class PostSummary {
  @Input() post!: Post;
}
