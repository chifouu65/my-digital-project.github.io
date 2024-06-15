import {Component, inject} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {ArticlesSectionComponent} from "../../components/articles-section/articles-section.component";
import {Articles} from "../../model/articles";
import {about$} from "../../../assets/config/data";
import {ButtonComponent} from "../../components/button/button.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-view-about',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    ArticlesSectionComponent,
    ButtonComponent,
    NgForOf
  ],
  templateUrl: './view-about.component.html',
  styleUrl: './view-about.component.css'
})
export class ViewAboutComponent {
  about = about$

  constructor(headerService: HeaderService) {
    headerService.get().set('A propos')
  }

  protected readonly about$ = about$;
  protected readonly inject = inject;
}
