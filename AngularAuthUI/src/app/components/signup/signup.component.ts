import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatCardModule, FormsModule, ReactiveFormsModule, MatInput, MatLabel, MatFormFieldModule, MatButtonModule, MatIcon],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['',Validators.required],
      password: ['', Validators.required],
      telephone: [''],
      dateOfBirth: ['', Validators.required]
    })

  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      ValidateForm.validateAllFormFields(this.signupForm);
    }
  }
}
