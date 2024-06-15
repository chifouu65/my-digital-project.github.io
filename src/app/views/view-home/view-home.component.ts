import {Component, inject, OnInit} from '@angular/core';
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
import {HeaderService} from "../../services/header.service";
import {actualites$, articles$, associations$, sponsors$} from "../../../assets/config/data";
import {Header} from "primeng/api";
import {ViewHelperService} from "../../services/view-helper.service";

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

  headerService = inject(HeaderService);

  constructor() {
   this.headerService.get().set('home')
  }

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

  sponsors = sponsors$

  associations = associations$

  actualites = actualites$

  articles = articles$


}
