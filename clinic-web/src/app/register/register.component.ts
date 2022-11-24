import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/RegisterService";
import { UserRegistrationRequest } from "../../api/generated";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: UserRegistrationRequest = {};
  public isClickRegister = false;

  registrationForm = new FormGroup({
    name: new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(3)
    ]),
    surname: new FormControl(this.user.surname, [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(this.user.password, [
      Validators.required
    ])
  });

  constructor(private registerService: RegisterService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getYear(): number {
    return new Date().getFullYear()
  }

  register(): void {
    this.isClickRegister = true;

    if (this.registrationForm.valid) {
      this.registerService.postRegister(this.user).subscribe(() => {
        this.user = {};
        this.router.navigate(['login'], {queryParams: {isRegistration: true}});
      });
    }
  }

}
