import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";
import {Observable} from "rxjs";
import {New,TestService} from "../shared/test.service";
import {Http,RequestOptions,Headers,URLSearchParams,HttpModule  } from "@angular/http";
import {HttpRequestService} from "../services/http-request.service";
//import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.scss']
})
export class UsermessageComponent implements OnInit {
  private users:Array<User>;
  private tt:string;
  //private users:User[];

  constructor(public router: Router,private newService:TestService,public http:Http,public httprequestService:HttpRequestService) { }

  ngOnInit() {

    this.http.get('/login/LoginServlet').map(res=>res.json()).subscribe(data =>
      {
        this.users=data['data'];
        console.log(data)
      }
    );

  }

  create()//添加学生按钮响应
  {
    this.router.navigateByUrl('/test/user/-1');
    /*let d1=new URLSearchParams();
    d1.append('id','2');
    d1.append('username','2');
    d1.append('password','2');
    d1.append('role','2');
    this.http.post('/login/Add',d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
    })*/


  }
  update()
  {
    let d1=new URLSearchParams();
    d1.append('id','170327113');
    d1.append('username','大佬');
    //d1.append('password','2');
    //d1.append('sex','2');
    //d1.append('role','2');
    d1.append('phone','123456');
    //d1.append('email','2');
    this.http.post('/login/Update',d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
    })
  }
  delete()
  {
    let d1=new URLSearchParams();
    d1.append('id','2');
    d1.append('username','2');
    d1.append('password','2');
    d1.append('sex','2');
    d1.append('role','2');
    d1.append('phone','2');
    d1.append('email','2');
    this.http.post('/login/Delete',d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
    })
  }
}
