import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-actualites-section',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './actualites-section.component.html',
  styleUrl: './actualites-section.component.css'
})
export class ActualitesSectionComponent {
  actualites = input.required<any[]>()
}
