import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { Artwork } from '../../models/Artwork';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {


  artworks: Artwork[] = [];
  category: string;
  selectedArtwork: Artwork | null = null;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router
  ) { 
    this.category = this.route.snapshot.paramMap.get('category') ?? 'all';
  }
openAddArtworkDialog() {
  this.router.navigate(['/add']);

}
  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.galleryService.getArtWorks().then(artworks => {
      if (this.category === 'all') {
        this.artworks = artworks;
      } else {
        this.artworks = artworks.filter(artwork => artwork.category === this.category);
      }
    }).catch(error => {
      console.error('Error fetching artworks:', error);
    });
  }

  viewDetails(artwork: Artwork) {
    this.selectedArtwork = artwork;
  }
}