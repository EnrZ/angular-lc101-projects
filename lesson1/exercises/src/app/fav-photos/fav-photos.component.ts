import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Images';
  image1 = 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg';
  image2 = 'https://www.thecinemashow.it/wp-content/uploads/2018/11/7gZZ6Qk2TZf4bEXHYbBEFlH8emJ.jpg';
  image3 = 'https://i2.wp.com/teaser-trailer.com/wp-content/uploads/Oceans-8-New-Poster-from-Hong-Kong.jpg?ssl=1';

  constructor() { }

  ngOnInit() {
  }

}