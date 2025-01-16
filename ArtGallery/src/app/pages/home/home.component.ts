import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/all.jpg',
      title: 'Welcome to Art Gallery',
      description: 'Discover the beauty of art through our extensive collection of sculptures and paintings. Our gallery offers a unique experience for art enthusiasts and collectors alike. Whether you are looking for inspiration or seeking to add to your collection, our curated selection of artworks will captivate your senses and ignite your passion for art.'
    },
    {
      image: 'assets/sculptures.jpg',
      title: 'Sculptures',
      description: 'Explore our diverse collection of sculptures, ranging from classical to contemporary pieces. Each sculpture is a testament to the skill and creativity of the artist, capturing the essence of their vision. Our collection includes works in various materials such as marble, bronze, and wood, showcasing the versatility and ingenuity of sculptural art. Come and experience the tactile beauty and intricate details of these magnificent creations.'
    },
    {
      image: 'assets/paintings.jpg',
      title: 'Paintings',
      description: 'Immerse yourself in our exquisite collection of paintings. From vibrant abstracts to serene landscapes, our gallery showcases a wide variety of styles and techniques, offering something for every art lover. Each painting tells a unique story, inviting you to explore the emotions and perspectives of the artist. Whether you prefer the bold strokes of modern art or the delicate brushwork of classical pieces, our gallery provides a rich visual journey through the world of painting.'
    }
  ];

  currentSlideIndex = 0;

  changeSlide(direction: number) {
    this.currentSlideIndex = (this.currentSlideIndex + direction + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlideIndex = index;
  }
}