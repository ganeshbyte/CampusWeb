import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgComponentOutlet, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgComponentOutlet,
    NgTemplateOutlet
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;


  changeStaus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  Logout() {
    console.log("logout")
  }

  Login() {
    console.log("logout")
  }
}
