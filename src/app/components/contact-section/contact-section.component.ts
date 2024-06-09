import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [MatIcon, FormComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  formSubmit(event: any) {
    console.log('formSubmit: ', event)
  }
}
