import {Component, inject, input, signal} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormComponent } from '../form/form.component';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Header, SharedModule} from "primeng/api";
import {HeaderService} from "../../services/header.service";
import {ViewHelperService} from "../../services/view-helper.service";
import {ButtonComponent} from "../button/button.component";
import {CarouselModule} from "primeng/carousel";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [MatIcon, FormComponent, ButtonComponent, CarouselModule, SharedModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

  title = input<boolean>(true)
  http = inject(HttpClient)
  helperService = inject(ViewHelperService)

  formSubmit(event: any) {
    console.log('formSubmit', event)
    this.helperService.sendForm({ name: event.name, replyto: event.email, message: `${event.object} : ${event.message}` })
  }
}
