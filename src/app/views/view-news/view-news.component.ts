import { Component } from '@angular/core';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';
import { ActualitesSectionComponent } from '../../components/actualites-section/actualites-section.component';
import {HeaderService} from "../../services/header.service";
import {actualites$} from "../../../assets/config/data";

@Component({
  selector: 'app-view-news',
  standalone: true,
  imports: [ActualitesSectionComponent],
  templateUrl: './view-news.component.html',
  styleUrl: './view-news.component.css'
})
export class ViewNewsComponent {
  constructor(headerService: HeaderService) {
    headerService.get().set('Actualité')
  }
  actualites = actualites$

}
