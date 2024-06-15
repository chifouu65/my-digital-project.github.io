import {Component, inject, input, signal} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormComponent } from '../form/form.component';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Header} from "primeng/api";
import {HeaderService} from "../../services/header.service";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [MatIcon, FormComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

  title = input<boolean>(true)
  http = inject(HttpClient)
  helperService = inject(ViewHelperService)

  submited = signal(false)

  formSubmit(event: any) {
    this.helperService.sendForm({ name: event.name, replyto: event.email, message: `${event.object} : ${event.message}` }, this.submited)
  }
}
