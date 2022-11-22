import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/RegisterService";
import { UserRegistrationRequest } from "../../api/generated";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: UserRegistrationRequest = {};

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  getYear(): number {
    return new Date().getFullYear()
  }

  register() {
    this.registerService.postRegister(this.user).subscribe(() => {
    });
  }

}
