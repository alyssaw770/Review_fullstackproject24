import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import ValidateForm from '../../helpers/validateForm';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['',Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    })  

  }

  onSignup() {
    if (this.signupForm.valid) {
      //perform signup logic
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res =>{
          alert(res.message);
          this.signupForm.reset();
          this.router.navigate(['login']);
        }),
        error: (err =>{
          alert(err?.error.message)
        })
      })
      console.log(this.signupForm.value);
    } else {
      ValidateForm.validateAllFormFields(this.signupForm);
    }
  }
}
