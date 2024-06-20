import {Component, inject, input} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {ButtonComponent} from "../button/button.component";
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-actualites-section',
  standalone: true,
  imports: [MatIcon, ButtonComponent, CarouselModule, SharedModule],
  templateUrl: './actualites-section.component.html',
  styleUrl: './actualites-section.component.css'
})
export class ActualitesSectionComponent {
  actualites = input.required<any[]>()
  helperService = inject(ViewHelperService)
  title = input<boolean>(false)
}
