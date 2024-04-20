import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onLogoClick(): void {
    this.router.navigate(['/']);  
  }
  
  onLoginClick(): void {
    this.router.navigateByUrl('/login');
  }

  onSignUpClick(): void {
    this.router.navigateByUrl('/signup');
  }
}
