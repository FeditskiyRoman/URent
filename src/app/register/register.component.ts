import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TokenPayload } from '../Models';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roleSelected: String = '';
  confirmNotBroker: Boolean = false;
  constructor(private auth: AuthenticationService, private router: Router) {}

  register(form: NgForm) {
    this.auth.register(form.value).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, () => {
    });
  }

  ngOnInit() {}
}
