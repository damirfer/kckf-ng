import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
