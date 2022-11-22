import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/RegisterService";
import { UserRegistrationRequest } from "../../api/generated";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: UserRegistrationRequest = {};

  constructor(private registerService: RegisterService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getYear(): number {
    return new Date().getFullYear()
  }

  register() {
    this.registerService.postRegister(this.user).subscribe(() => {
      this.user = {};
      this.router.navigate(['login'], {queryParams: {isRegistration: true}});
    });
  }

}
