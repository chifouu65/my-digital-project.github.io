import { Component, input } from '@angular/core';
import { Carousel, CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-associations-section',
  standalone: true,
  imports: [CarouselModule, ButtonComponent],
  templateUrl: './associations-section.component.html',
  styleUrl: './associations-section.component.css'
})
export class AssociationsSectionComponent {

  associations = input.required<any[]>()
  responsiveOptions =input.required<CarouselResponsiveOptions[]>()

}
