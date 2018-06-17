import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {New,TestService} from "../shared/test.service";
import "rxjs/Rx";
import {Http,RequestOptions,Headers,URLSearchParams,HttpModule  } from "@angular/http";
import {HttpRequestService} from "../services/http-request.service";
import {User} from "../shared/user.service";
//import {RequestOptions} from "@angular/http";


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {


  private news:Array<New>;
  private tt:string;
  private users:User[];

  constructor(private newService:TestService,public http:Http,public httprequestService:HttpRequestService) {


  }

  ngOnInit() {

    this.http.get('/login/LoginServlet').map(res=>res.json()).subscribe(data =>
      {
        this.news=data['data'];
        console.log(data)
      }
    );

  }

  create()//添加学生按钮响应
  {

    let d1=new URLSearchParams();
    d1.append('id','2');
    d1.append('username','2');
    d1.append('password','2');
    d1.append('role','2');
    this.http.post('/login/Add',d1)
      .map(res => res.json()).subscribe(function (data) {
        alert(JSON.stringify(data));
    })


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
    d1.append('id','4');
    d1.append('username','4');
    d1.append('password','4');
    d1.append('sex','4');
    d1.append('role','4');
    this.http.post('/login/Delete',d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
    })
  }



}




