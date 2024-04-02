import { Component } from '@angular/core';
import { INavigation } from 'src/app/models/INavigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navItems: INavigation[] = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Login',
      url: '/login',
    },
    {
      title: 'Register',
      url: '/register',
    },
  ];
}
