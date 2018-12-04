import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
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
    values.role = this.roleSelected;

    this.auth.register(values).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, () => {
    });
  }

  ngOnInit() {}
}
