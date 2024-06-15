import {Component, inject, input} from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonComponent } from '../button/button.component';
import {Router} from "@angular/router";
import {ViewHelperService} from "../../services/view-helper.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-partenaires-and-sponsors-section',
  standalone: true,
  imports: [CarouselModule, ButtonComponent, MatIcon],
  templateUrl: './partenaires-and-sponsors-section.component.html',
  styleUrl: './partenaires-and-sponsors-section.component.css'
})
export class PartenairesAndSponsorsSectionComponent {
  sponsors = input.required<any[]>();
  responsiveOptions = input.required<CarouselResponsiveOptions[]>();
  helperService = inject(ViewHelperService);

}
