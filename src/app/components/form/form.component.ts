import { Component, inject, output, signal } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  data = output<{
    name: string,
    email: string,
    object: string,
    message: string
  }>()

  submited = signal(false)
  errorMessage = ''

  updateErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Email!';
    } if (this.form.controls.name.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Nom!';
    } if (this.form.controls.object.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Object!';
    } else if (this.form.controls.message.hasError('required')) {
      this.errorMessage = 'Vous devez entrer un Message!';
    } else {
      this.errorMessage = '';
    }
  }


  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    object: new FormControl<string>('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required])
  });

  onSubmit(form: any) {
    console.log(form)
    if(form.valid) {
      this.data.emit(form.value)
      this.form.reset()
      this.submited.set(true)
    }
  }


}
