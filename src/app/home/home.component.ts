import { Component } from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../../module/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
