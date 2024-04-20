import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatCardModule, FormsModule, ReactiveFormsModule, MatInput, MatLabel, MatFormFieldModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
firstName = new FormControl('',[Validators.required]);
lastName = new FormControl('',[Validators.required]);
email = new FormControl('',[Validators.required]);
telephone = new FormControl('');
dateOfBirth = new FormControl('',[Validators.required]);

}
