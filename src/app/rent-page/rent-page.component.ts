import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Rent } from '../Models';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.scss'],
  providers: [RentService]
})
export class RentPageComponent implements OnInit {
  rent: Rent = new Rent;

  constructor(private route: ActivatedRoute, private rentService: RentService) { }

  ngOnInit() {
    this.rentService.getRent(this.route.snapshot.params['id']).subscribe(((res: Rent) => {
      const arr = [];
      res.imgs.map(img => {
        arr.push(this.rentService.makeImgLink(img));
      });

      res.imgs = arr;
      this.rent = res;
      console.log(this.rent);
    }));
  }
}
