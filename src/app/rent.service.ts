import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RentService {
  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  getRentList(page: Number, limit: Number): Observable <any> {
    return this.http.get('/api/rents/' + page + '/' + limit, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    }).pipe(
      map(data => data)
    );
  }

  createRent(rent): Observable <any> {
    return this.http.post('/api/rent', rent, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
        // 'Content-Type': 'multipart/form-data'
      }
    }).pipe(
      map(data => data)
    );
  }

  uploadFiles(files): Observable <any> {
    return this.http.post('/api/files', files, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
        'Content-Type': 'multipart/form-data'
      }
    }).pipe(
      map(data => data)
    );
  }
}
