import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artwork } from '../models/Artwork';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  apiDomain = 'http://localhost:5131/ArtWork';
  constructor(private http: HttpClient) { }
  async getArtWorks():Promise<Artwork[]> {

    const artworks = await this.http.get<Artwork[]>(this.apiDomain+"/getArtwork").toPromise();
    return artworks || [];
  }
  getArtworkById(id: string): Observable<any> {
    return this.http.get(`${this.apiDomain}/getArtworkById?id=${id}`);
  }
  async addArtwork(artwork: any): Promise<any> {
    return this.http.post(`${this.apiDomain}/addArtwork`, artwork).toPromise();
  }
}
