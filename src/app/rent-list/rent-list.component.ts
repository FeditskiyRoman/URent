import { Component, OnInit, ViewChild } from '@angular/core';
import { RentService } from '../rent.service';
import { NgbPagination, NgbPaginationConfig, NgbModal, NgbDateStruct, NgbCalendar } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from '../../../node_modules/ngx-google-places-autocomplete';
import { ComponentRestrictions } from '../../../node_modules/ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { TranslateService } from '@ngx-translate/core';
import { Rent } from '../Models';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss'],
  providers: [NgbPagination, NgbPaginationConfig]
})
export class RentListComponent implements OnInit {
  @ViewChild('places') places: GooglePlaceDirective;
  rentList: [Rent];
  page: Number = 1;
  pages: Number = 0;
  limit: Number = 9;
  rent: Rent = new Rent;
  files = [];
  data: NgbDateStruct;

  constructor(
    private rentService: RentService,
    private modalService: NgbModal,
    private translate: TranslateService,
    private calendar: NgbCalendar) {
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

  onChange(address) {
    this.rent.address = {
      formated: address.formatted_address,
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    };
  }

  onFileChange(e) {
    this.files = e.target.files;
  }

  public changeConfig() {
    this.places.options.componentRestrictions = new ComponentRestrictions({
        country: 'UA'
    });

    this.places.reset();
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'}).result.then(() => {
      if (this.files.length > 0) {
        const formData = new FormData();

        for (const key in this.files) {
          if (this.files[key]) {
            formData.append('file', this.files[key], this.files[key].name);
          }
        }

        this.rentService.uploadFiles(formData).subscribe(img => {
          this.rent.imgs = img;

          return this.rentService.createRent(this.rent).subscribe(() => {
            this.getRents(this.page, this.limit);
          });
        });
      } else {
        this.rentService.createRent(this.rent).subscribe(() => {
          this.getRents(this.page, this.limit);
        });
      }
    }, () => {});
  }

  pageChange() {
    this.getRents(this.page, this.limit);
  }

  ngOnInit() {
    this.getRents(this.page, this.limit);
  }
}
