import {Component, input, OnInit, TemplateRef} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  // selectBreadCrumb = input<TemplateRef<any> | null>(null) ;

  constructor(private router: Router, private route: ActivatedRoute){}

}


