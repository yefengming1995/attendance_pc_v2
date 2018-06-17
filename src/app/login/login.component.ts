import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {LocalstorageService} from "../services/localstorage.service";
import {User} from "../shared/user.service";
import "rxjs/Rx";
import {Http,RequestOptions,Headers,URLSearchParams,HttpModule  } from "@angular/http";
import {HttpRequestService} from "../services/http-request.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public role:number;
  public password:string;
  validateForm: FormGroup;
  public userName:string;
  public users:Array<User>;
  constructor(public http:Http,private fb: FormBuilder,public router: Router,private storage:LocalstorageService,public userService:UserService) {

  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  toWelcome() {
    let d1 = new URLSearchParams();
    d1.append('username', this.userName);
    d1.append('password', this.password);
    this.http.post('/login/LoginJudge', d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
      console.log(data['data']);
      this.users = data['data'];
      console.log(this.users);
      if (data['data'] == '') {
        alert('用户名或者密码不正确');
      }
      else {
        console.log(this.users[0].role);
        if (this.users[0].role == 0) {
          alert('欢迎系统管理员登录');
        }
        else if (this.users[0].role == 1) {
          alert('欢迎教师登录');
        }
        else if (this.users[0].role == 2) {
          alert('欢迎学生登录');

        }
        let navigationExtras:NavigationExtras ={
          queryParams:{'roleid':this.users[0].role}
        };
        this.router.navigate(['/test/welcome'],navigationExtras);
      }
    })
    console.log(this.users);
  }

}
