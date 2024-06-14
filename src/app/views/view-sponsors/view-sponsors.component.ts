import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {FormComponent} from "../../components/form/form.component";
import {ContactSectionComponent} from "../../components/contact-section/contact-section.component";
import {HeaderService} from "../../services/header.service";
import {sponsors$} from "../../../assets/config/data";

@Component({
  selector: 'app-view-sponsors',
  standalone: true,
  imports: [
    ButtonComponent,
    FormComponent,
    ContactSectionComponent
  ],
  templateUrl: './view-sponsors.component.html',
  styleUrl: './view-sponsors.component.css'
})
export class ViewSponsorsComponent {
  sponsors = sponsors$

  constructor(headerService: HeaderService) {
    headerService.get().set('Sponsors / Partenaires')
  }
}
