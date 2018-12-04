import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TokenPayload } from '../Models';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fieldsInfo: String = '';
  message: String;

  constructor(private auth: AuthenticationService, private router: Router) {}

  login(form: NgForm) {
    this.auth.login(form.value).subscribe(() => {
      this.auth.redirect();
      this.router.navigateByUrl('/rent-list');
    }, (err) => {
      this.message = 'Wrong email or password';
    });
  }
}
