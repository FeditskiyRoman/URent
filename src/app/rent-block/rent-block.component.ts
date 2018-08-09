import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rent-block',
  templateUrl: './rent-block.component.html',
  styleUrls: ['./rent-block.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RentBlockComponent implements OnInit {
  @Input() rent;

  constructor() { }

  ngOnInit() {
    const windLoc = window.location;

    this.rent.updated_at = new Date(this.rent.updated_at).toLocaleDateString();

    const arr = [];
    this.rent.imgs.map(img => {
      arr.push(windLoc.protocol + '//' + windLoc.hostname + ':' + windLoc.port + '/api/file/' + img);
    });

    this.rent.imgs = arr;
  }
}
