import { Component } from '@angular/core';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';

@Component({
  selector: 'app-view-expedition',
  standalone: true,
  imports: [ArticlesSectionComponent],
  templateUrl: './view-expedition.component.html',
  styleUrl: './view-expedition.component.css'
})
export class ViewExpeditionComponent {
  articles = [
    {
      categories: ['A Propos'],
      title: 'Josué Famille',
      content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
      img: {
        url: 'assets/images/home/profile.png',
        alt: 'Photo de josué',
      },
      button: {
        title: 'A propos de moi',
        action: () => {
          console.log('button a propos')
        }
      }
    },
    {
      categories: ['Dernière expédition'],
      title: 'Tour de Bretagne',
      content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
      img: {
        url: 'assets/images/home/last-travel.png',
        alt: 'Photo de la Bretagne',
      },
      button: {
        title: 'La Bretagne...',
        action: () => {
          console.log('button Tour de bretagne')
        }
      }
    },
    {
      categories: ['Dernière expédition'],
      title: 'Tour de Bretagne',
      content: ['Lorem ipsum dolor sit amet consectetur. Risus duis vel eget metus turpis ac placerat ac. Risus aenean hendrerit sem quam. Eu non nulla nullam nibh viverra fringilla duis.', 'Lorem ipsum dolor sit amet consectetur. In massa bibendum aliquam faucibus libero et mauris pellentesque. Neque commodo ut elit dolor. Dictum quam dolor sed volutpat. Nisi netus risus id sed. Ultricies phasellus sit eget platea aliquet. At tristique.'],
      img: {
        url: 'assets/images/home/last-travel.png',
        alt: 'Photo de la Bretagne',
      },
      button: {
        title: 'La Bretagne...',
        action: () => {
          console.log('button Tour de bretagne')
        }
      }
    }
  ]
}
