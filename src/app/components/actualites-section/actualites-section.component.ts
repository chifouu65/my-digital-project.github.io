import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {ButtonComponent} from "../button/button.component";
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";

@Component({
  selector: 'app-actualites-section',
  standalone: true,
  imports: [MatIcon, ButtonComponent, CarouselModule, SharedModule],
  templateUrl: './actualites-section.component.html',
  styleUrl: './actualites-section.component.css'
})
export class ActualitesSectionComponent {
  actualites = input.required<any[]>()

  title = input<boolean>(false)
}
