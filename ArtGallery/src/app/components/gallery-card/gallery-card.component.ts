import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() category: string = '';
  @Input() description: string = '';
  @Input() id: number = 0;
 
  constructor(private router: Router) { }

  goToArtworkDetails() {
    this.router.navigate(['/artwork', this.id]);
  }
}