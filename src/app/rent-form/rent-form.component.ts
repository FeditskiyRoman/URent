import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { RentService } from '../rent.service';
import { NgbDateStruct, NgbCalendar } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from '../../../node_modules/ngx-google-places-autocomplete';
import { ComponentRestrictions } from '../../../node_modules/ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { Rent } from '../Models';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})

export class RentFormComponent implements OnInit {
  @ViewChild('places') places: GooglePlaceDirective;
  @Output() reloadPage = new EventEmitter();
  @Input() closePopup;

  rent: Rent = new Rent;
  files = [];
  data: NgbDateStruct;

  constructor(
    private rentService: RentService,
    private calendar: NgbCalendar
) {}

  onAddressChange(address) {
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

  uploadRent() {
    if (this.files.length > 0) {
      const formData = new FormData();

      for (const key in this.files) {
        if (this.files[key] && this.files[key].type === 'image/jpeg') {
          console.log('file', this.files[key], this.files[key].name);
          formData.append('file', this.files[key], this.files[key].name);
        }
      }

      this.rentService.uploadFiles(formData).subscribe(img => {
        this.rent.imgs = img;

        return this.rentService.createRent(this.rent).subscribe(() => {
          this.reloadPage.emit();
          this.closePopup();
        });
      });
    } else {
      this.rentService.createRent(this.rent).subscribe(() => {
        this.reloadPage.emit();
        this.closePopup();
      });
    }
  }

  ngOnInit() {
  }
}
