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
    const values = form.value;

    console.log(values);
    this.auth.register(values).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, () => {
    });
  }

  ngOnInit() {}
}
