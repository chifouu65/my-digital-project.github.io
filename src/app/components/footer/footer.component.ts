import { Component } from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ButtonComponent} from "../button/button.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatError,
    FormsModule,
    ButtonComponent,
    MatButton
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Email!';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Email invalide!';
    } else {
      this.errorMessage = '';
    }
  }

  submitEmail() {
    console.log('submit: ', this.email.value)
  }
}
