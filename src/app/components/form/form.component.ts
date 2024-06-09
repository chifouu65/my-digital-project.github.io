import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formIsSend = signal(false)

  data = output<{
    name: string,
    email: string,
    object: string,
    message: string
  }>()

  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    object: new FormControl<string>(''),
    message: new FormControl<string>('')
  });

  onSubmit(form: any) {
    console.log(form.value)
    this.data.emit(form.value)
    this.form.reset()

    this.formIsSend.set(true)
    console.log('resrt', this.form)
  }
} 
