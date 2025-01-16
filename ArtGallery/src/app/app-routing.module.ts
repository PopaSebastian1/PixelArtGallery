import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ArtworkDetailsPageComponent } from './pages/artwork-details-page/artwork-details-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AddArtworkComponent } from './components/add-artwork/add-artwork.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
    
  },
  {
    path: 'register',
    component:RegisterPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'gallery/:category',
    component: GalleryPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'artwork/:id',
    component: ArtworkDetailsPageComponent,
    pathMatch: 'full',
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddArtworkComponent,
    pathMatch: 'full',
  },
  {
    
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
