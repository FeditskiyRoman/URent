import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../node_modules/@angular/router';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-block',
  templateUrl: './rent-block.component.html',
  styleUrls: ['./rent-block.component.scss'],
  providers: [NgbCarouselConfig, RentService]
})
export class RentBlockComponent implements OnInit {
  @Input() rent;

  constructor(private router: Router, private rentService: RentService) { }

  openRent() {
    this.router.navigate(['/rent', this.rent._id]);
  }

  prev(e) {
    e.stopPropagation();
  }

  ngOnInit() {
    const arr = [];
    this.rent.imgs.map(img => {
      arr.push(this.rentService.makeImgLink(img));
    });

    this.rent.imgs = arr;
  }
}
