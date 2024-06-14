import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ButtonComponent} from "../button/button.component";
import {MatButton} from "@angular/material/button";
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";

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
  styleUrl: './footer.component.css',
  providers: [HttpClient]
})
export class FooterComponent {
  email = new FormControl('', [Validators.required],);
  name = new FormControl('', [Validators.required],);
  message = new FormControl('', [Validators.required],);

  errorMessage = '';
  http = inject(HttpClient)

  submited = false
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Email!';
    } if (this.name.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Nom!';
    } if (this.message.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Message!';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Email invalide!';
    } else {
      this.errorMessage = '';
    }
  }

  submitEmail() {
    console.log('submit: ', this.email.value)

    if(this.email.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mvoeewyd',
        { name: this.name.value, replyto: this.email.value },
        { 'headers': headers }).subscribe(
        (response : any) => {
          console.log(response);
          if(response.ok) {
            this.submited = true
          }
        }
      );
    }
  }
}
