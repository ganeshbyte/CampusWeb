import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./project/project.component";


export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "project",
    component: ProjectComponent,
  }
];
