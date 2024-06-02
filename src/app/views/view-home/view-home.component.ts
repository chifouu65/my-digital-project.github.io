import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../components/button/button.component";
import {Articles} from "../../model/articles";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-view-home',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NgOptimizedImage,
    ButtonComponent,
    NgForOf,
    MdbCarouselModule,
    CarouselModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  associations = [
    {
      name: 'Anne Charlotte',
      img: 'assets/images/associations/img.png'
    },
    {
      name: 'restau du coeur',
      img: 'assets/images/associations/img.png'
    },
    {
      name: 'Eglise cool',
      img: 'assets/images/associations/img.png'
    },
    {
      name: 'Croix rouge',
      img: 'assets/images/associations/img.png'
    },
    {
      name: 'restau du coeur',
      img: 'assets/images/associations/img.png'
    },
    {
      name: 'Eglise cool',
      img: 'assets/images/associations/img.png'
    },
  ]

  articles: Articles = [
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
    }
  ]

}
