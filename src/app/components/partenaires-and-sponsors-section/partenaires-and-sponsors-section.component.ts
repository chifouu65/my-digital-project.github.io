import { Component, input } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-partenaires-and-sponsors-section',
  standalone: true,
  imports: [CarouselModule, ButtonComponent],
  templateUrl: './partenaires-and-sponsors-section.component.html',
  styleUrl: './partenaires-and-sponsors-section.component.css'
})
export class PartenairesAndSponsorsSectionComponent {
  data = input.required<any[]>()
  responsiveOptions =input.required<CarouselResponsiveOptions[]>()

}
