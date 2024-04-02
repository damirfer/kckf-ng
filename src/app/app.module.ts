import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { SinglePostComponent } from './pages/single-post/single-post.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostComponent, LoginComponent, SignUpComponent, HomeComponent, NotFoundComponent, TrimTextPipe, SinglePostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
