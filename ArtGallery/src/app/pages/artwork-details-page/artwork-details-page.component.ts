import { Component, Input } from '@angular/core';
import { Artwork } from '../../models/Artwork';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-artwork-details-page',
  templateUrl: './artwork-details-page.component.html',
  styleUrl: './artwork-details-page.component.scss'
})
export class ArtworkDetailsPageComponent {
  artwork: Artwork | undefined;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.galleryService.getArtworkById(id).subscribe((artwork: Artwork) => {
        this.artwork = artwork;
      });
    }
  }
}
