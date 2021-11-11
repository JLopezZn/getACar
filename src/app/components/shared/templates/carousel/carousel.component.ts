import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  backgroundImages = [
    'https://images.freeimages.com/images/large-previews/f73/the-french-car-1313143.jpg',
    'https://images.freeimages.com/images/large-previews/28c/chevy-camaro-first-gen-1256909.jpg',
    'https://images.freeimages.com/images/large-previews/a25/japanes-car-1449114.jpg',
  ];
  imageOnBackground = this.backgroundImages[0];

  constructor() {}

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    let aux = 0;
    setInterval(() => {
      if(aux < this.backgroundImages.length){
        this.imageOnBackground = this.backgroundImages[aux];
        aux++;
      }
      else {
        this.imageOnBackground = this.backgroundImages[0];
        aux = 1;
      }
    }, 5000);
  }

}
