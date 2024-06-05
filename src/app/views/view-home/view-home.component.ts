import { Component, OnInit } from '@angular/core';
import { MatGridList, MatGridListModule, MatGridTile } from "@angular/material/grid-list";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";
import { Articles } from "../../model/articles";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { CarouselModule } from "primeng/carousel";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { FormComponent } from '../../components/form/form.component';
import { MatIcon } from '@angular/material/icon';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { AssociationsSectionComponent } from '../../components/associations-section/associations-section.component';
import { ActualitesSectionComponent } from '../../components/actualites-section/actualites-section.component';
import { PartenairesAndSponsorsSectionComponent } from '../../components/partenaires-and-sponsors-section/partenaires-and-sponsors-section.component';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';

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
    ButtonModule,
    MatIcon,
    MatGridListModule,
    
    ContactSectionComponent,
    PartenairesAndSponsorsSectionComponent,
    ActualitesSectionComponent,
    AssociationsSectionComponent,
    ArticlesSectionComponent
  ],
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
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
