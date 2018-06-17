import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {LocalstorageService} from "../services/localstorage.service";
import {User} from "../shared/user.service";
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
  constructor(private fb: FormBuilder,public router: Router,private storage:LocalstorageService,public userService:UserService) {

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

  toWelcome()
  {
    //this.users=this.userService.getUsers();
   // var user=this.users.find(user => user.username==this.userName);
    /*console.log(user);
    if(!user){
      user =new User(0, '', '', '', '', '');
    }*/

    if(this.userName=='admin')
    {
      alert('欢迎系统管理员登录');
      /*let navigationExtras:NavigationExtras ={
        queryParams:{'roleid':0}
      };
      this.router.navigate(['/test/welcome'],navigationExtras);*/
    }
    else if(this.userName=='teacher')
    {
      alert('欢迎教师登录');
      /*let navigationExtras:NavigationExtras ={
        queryParams:{'roleid':1}
      };
      this.router.navigate(['/test/welcome'],navigationExtras);*/
    }
    else if(this.userName=='student')
    {
      alert('欢迎学生登录');
      /*let navigationExtras:NavigationExtras ={
        queryParams:{'roleid':2}
      };
      this.router.navigate(['/test/welcome'],navigationExtras);*/
    }
    else
    {
      alert('用户名或者密码不正确');
    }
  }

}
