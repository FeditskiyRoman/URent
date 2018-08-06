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
    this.rent.update = new Date(this.rent.update).toLocaleDateString();
  }

}
