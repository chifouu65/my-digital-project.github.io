import { Component } from '@angular/core';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';
import {HeaderService} from "../../services/header.service";
import {articles$, expeditions$} from "../../../assets/config/data";

@Component({
  selector: 'app-view-expedition',
  standalone: true,
  imports: [ArticlesSectionComponent],
  templateUrl: './view-expedition.component.html',
  styleUrl: './view-expedition.component.css'
})
export class ViewExpeditionComponent {

  constructor(headerService: HeaderService) {
    headerService.get().set('expédition')
  }

  articles = expeditions$
}
