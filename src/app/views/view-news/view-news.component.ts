import { Component } from '@angular/core';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';
import { ActualitesSectionComponent } from '../../components/actualites-section/actualites-section.component';

@Component({
  selector: 'app-view-news',
  standalone: true,
  imports: [ActualitesSectionComponent],
  templateUrl: './view-news.component.html',
  styleUrl: './view-news.component.css'
})
export class ViewNewsComponent {
  
  actualites = [
    {
      id: 1,
      title: "Une panoplie de services !",
      description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
      img: {
        url: 'assets/images/home/profile.png',

        alt: ''
      }
    },
    {
      id: 2,
      title: "Une panoplie de services !",
      description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
      img: {
        url: 'assets/images/home/profile.png',

        alt: ''
      }
    },
    {
      id: 3,
      title: "Une panoplie de services !",
      description: 'ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi ipsum dolor sit amet consectetur. Risus duis vel eget metus turpi',
      img: {
        url: 'assets/images/home/profile.png',

        alt: ''
      }
    }
  ]

}
