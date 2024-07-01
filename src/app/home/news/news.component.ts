import {Component, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    MatCardModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

    //inputs
    imageUrl = input<string>("");
    title = input<string>("");
    description = input<string>("");
    constructor() {
    }
}
