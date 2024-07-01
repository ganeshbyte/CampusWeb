import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "../module/navbar/navbar.component";
import {FooterComponent} from "../module/footer/footer.component";
// import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BreadcrumbComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
