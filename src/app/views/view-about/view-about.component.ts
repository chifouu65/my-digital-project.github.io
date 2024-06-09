import { Component } from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-view-about',
  standalone: true,
  imports: [],
  templateUrl: './view-about.component.html',
  styleUrl: './view-about.component.css'
})
export class ViewAboutComponent {
  constructor(headerService: HeaderService) {
    headerService.get().set('A propos')
  }
}
