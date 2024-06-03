import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    object: new FormControl<string>(''),
    message: new FormControl<string>('')
  });

  onSubmit(form: any) {
    console.log(form.value)
  }
} 
