import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User,UserService} from "../../shared/user.service";
import {LocalstorageService} from "../../services/localstorage.service";

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  private users:Array<User>;
  public username:string;
  public logintime:string;
  public beforetime:string;
  public role:string;
  constructor(private routerInfo:ActivatedRoute ,private userService:UserService,
              private router:Router,private storage:LocalstorageService) { }

  ngOnInit() {
    this.username='';
    this.role='';
    this.beforetime='';
    this.logintime='';
  }
  cancel(){
    this.router.navigateByUrl('/test/user');
  }
  save() {

    var obj={
      id:this.storage.getItem('u').length+1,
      username:this.username,
      logintime:this.logintime,
      photo:'',
      beforetime:this.beforetime,
      role:this.role
    }
    this.users =this.storage.getItem('u');
    this.users.push(obj);
    this.storage.setItem('u',this.users);
    console.log(this.users);
    alert("保存成功！")
  }
}
