import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import {LoginService} from '../login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  constructor(private loginService:LoginService, private formBuilder: FormBuilder) { }
  
  user: User;
  form: FormGroup;

  login(): void {
    console.log(this.form.value)
    this.user = this.form.value;
    this.loginService.login(this.user).subscribe();
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: [null, Validators.required]
    });
  }

}
