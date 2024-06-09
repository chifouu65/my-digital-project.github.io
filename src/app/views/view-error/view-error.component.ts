import { Component } from '@angular/core';
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-view-error',
  standalone: true,
  imports: [],
  templateUrl: './view-error.component.html',
  styleUrl: './view-error.component.css'
})
export class ViewErrorComponent {
  constructor(headerService: HeaderService) {
    headerService.get().set('error')
  }
}
