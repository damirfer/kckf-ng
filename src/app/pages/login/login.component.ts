import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/models/IRegisterUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    let user: IUser = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(user).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }
}
