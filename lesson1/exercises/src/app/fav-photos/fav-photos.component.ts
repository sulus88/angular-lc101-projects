import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://lp-cms-production.imgix.net/image_browser/Golden%20Horn.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Ulucami%2CBursa_-_panoramio.jpg'
  constructor() { }

  ngOnInit() {
  }

}