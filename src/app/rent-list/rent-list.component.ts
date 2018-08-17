import { Component, OnInit } from '@angular/core';
import { RentService } from '../rent.service';
import { NgbPagination, NgbPaginationConfig, NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Rent } from '../Models';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss'],
  providers: [NgbPagination, NgbPaginationConfig]
})
export class RentListComponent implements OnInit {
  rentList: [Rent];
  page: Number = 1;
  pages: Number = 0;
  limit: Number = 9;

  constructor(
    private rentService: RentService,
    private modalService: NgbModal,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ua']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
  }

  private getRents(page: Number, limit: Number) {
    this.rentService.getRentList(page, limit).subscribe(((res: any) => {
      this.rentList = res.rent;
      this.pages = res.count;
    }));
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'}).result.then(() => {
    }, () => {});
  }

  pageChange() {
    this.getRents(this.page, this.limit);
  }

  ngOnInit() {
    this.getRents(this.page, this.limit);
  }
}
