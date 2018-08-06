import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {
  rentList = [];

  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.rentService.getRentList().then(((res: any) => {
      this.rentList = res;
    }));
  }
}
