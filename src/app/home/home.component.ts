import { Component } from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {FooterComponent} from "../../module/footer/footer.component";
import {NavbarComponent} from "../../module/navbar/navbar.component";
import {NewsComponent} from "./news/news.component";
import {INews} from "../interface/INews";
import {MatDivider} from "@angular/material/divider";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BreadcrumbComponent} from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    MatDivider,
    RouterOutlet,
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  news: INews[] = [
    {
      id: "1",
      imageUrl: "https://www.curacubby.com/hs-fs/hubfs/school-event-ideas.jpg?width=1200&name=school-event-ideas.jpg",
      description: "Breaking news: Major event unfolds in the city. Stay tuned for more updates.",
      title: "Major City Event"
    },
    {
      id: "2",
      imageUrl: "https://www.curacubby.com/hs-fs/hubfs/school-event-ideas.jpg?width=1200&name=school-event-ideas.jpg",
      description: "Sports update: Local team wins championship in a thrilling match.",
      title: "Local Team Wins Championship"
    },
    {
      id: "3",
      imageUrl: "https://www.curacubby.com/hs-fs/hubfs/school-event-ideas.jpg?width=1200&name=school-event-ideas.jpg",
      description: "Tech news: New smartphone model released with cutting-edge features.",
      title: "New Smartphone Released"
    },

  ];
     constructor() {
     }
}
