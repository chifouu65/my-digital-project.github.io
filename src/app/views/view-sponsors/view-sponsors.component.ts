import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {FormComponent} from "../../components/form/form.component";
import {ContactSectionComponent} from "../../components/contact-section/contact-section.component";
import {HeaderService} from "../../services/header.service";

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
  sponsors = [
    {
      name: 'Krys',
      img: 'assets/images/sponsors/Image-1.png'
    },
    {
      name: 'Yukadi',
      img: 'assets/images/sponsors/Image-2.png'
    },
    {
      name: 'Essential trainer',
      img: 'assets/images/sponsors/Image.png'
    },
    {
      name: 'Krys',
      img: 'assets/images/sponsors/Image-1.png'
    },
    {
      name: 'Yukadi',
      img: 'assets/images/sponsors/Image-2.png'
    },
    {
      name: 'Essential trainer',
      img: 'assets/images/sponsors/Image.png'
    }
  ]

  constructor(headerService: HeaderService) {
    headerService.get().set('sponsors')
  }
}
