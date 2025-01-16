import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { Artwork } from '../../models/Artwork'
@Component({
  selector: 'app-add-artwork',
  templateUrl: './add-artwork.component.html',
  styleUrl: './add-artwork.component.scss'
})
export class AddArtworkComponent {
  constructor(
    private galleryService: GalleryService,
    private router: Router
  ) {}

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const newArtwork: Artwork = form.value;
      try {
        await this.galleryService.addArtwork(newArtwork);
        this.router.navigate(['/gallery/all']);
      } catch (error) {
        console.error('Error adding artwork:', error);
      }
    }
  }
}
