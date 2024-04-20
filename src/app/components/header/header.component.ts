import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { INavigation } from 'src/app/models/INavigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(private authService: AuthService) {}

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

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated$.subscribe((loggedIn) => {
      if (loggedIn) {
        this.navItems = [
          {
            title: 'Home',
            url: '/home',
          },
          {
            title: 'Profile',
            url: '/profile',
          },
          {
            title: 'Logout',
            url: '/logout',
          },
        ];
      } else {
        this.navItems = [
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
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
