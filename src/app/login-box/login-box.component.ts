import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../User';
import { LoginService } from '../login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }
  user: User;
  form: FormGroup;


  login(): void {
    this.loginService.login(this.form.value).subscribe(user =>
      {
        if(user)
        {
          this.user = user;
          this.loginService.changeLoggedIn(true);
          // this.loginService.loggingObservable.next(true);
          // this.loginService.loggingToggle.emit(true);
        }       
      },     
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: [null, Validators.required]
    });
  }

}
