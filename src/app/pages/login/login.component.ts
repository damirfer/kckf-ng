import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = ''
  password = ''

  public onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
