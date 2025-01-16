import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './components/login-form/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { ArtworkDetailsPageComponent } from './pages/artwork-details-page/artwork-details-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AddArtworkComponent } from './components/add-artwork/add-artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    HeaderComponent,
    HomeComponent,
    GalleryPageComponent,
    GalleryCardComponent,
    ArtworkDetailsPageComponent,
    AboutComponent,
    AddArtworkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
