import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {New,TestService} from "../shared/test.service";
import "rxjs/Rx";
import {Http,RequestOptions,Headers,URLSearchParams,HttpModule  } from "@angular/http";
import {HttpRequestService} from "../services/http-request.service";
//import {RequestOptions} from "@angular/http";


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {


  private news:Array<New>;
  private tt:string;
  dataSource:Observable<any>;

  constructor(private newService:TestService,public http:Http,public httprequestService:HttpRequestService) {
    //this.dataSource=this.http.get('/JsonTest/getJson').map(res=>res.json());

  }

  ngOnInit() {


   /* this.dataSource.subscribe(
      data=>this.news=data
    )
    console.log(this.news);*/

    this.http.get('/login/LoginServlet').map(res=>res.json()).subscribe(data =>
      {
        this.news=data['data'];
        console.log(data)
      }
    );
    /*this.http.get('/JsonTest/getJson').map(res=>res.json()).subscribe(data =>
      {
        //this.news=data['data'];
        console.log(data)
      }
    );*/

    /*let  d1 = new URLSearchParams();
    d1.append('nId',   '113' );
    d1.append('title',   '高考堵车' );
    d1.append('content','高考高峰堵车，特警出动');
    d1.append('date','2018-06-08');
    d1.append('url','www.baidu.com');
    let dates ={
      nId:113,
      title:'高考堵车',
      content:'高考高峰堵车，特警出动',
      date:'2018-5-28',
      url:'www.baidu.com'
    };/*{params: dates}
    this.http.post('/attendentServer/course',d1).subscribe(data=> console.log(data)
      );*/

    //this.httprequestService.httpPost('/JsonTest/getJson', dates, this, 'save');
    /*let  d1 = new URLSearchParams();
    d1.append('nId',   '113' );
    d1.append('title',   '高考堵车' );
    d1.append('content','高考高峰堵车，特警出动');
    d1.append('date','2018-06-08');
    d1.append('url','www.baidu.com');
    let dates ={
      nId:113,
      title:'高考堵车',
      content:'高考高峰堵车，特警出动',
      date:'2018-5-28',
      url:'www.baidu.com'
    };
    this.http.post('/login/Delete',d1).subscribe(data=> console.log(data)
      );*/
  }

  create()//添加学生按钮响应
  {
    /*this.http.get('/login/Add').map(res=>res.json()).subscribe(data => {
        this.news=data.data;
        console.log(this.news)
    }

    );*/
    //application/x-www-form-urlencoded
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    //
    // let options = new RequestOptions({ headers: headers });
    //
    // this.http.post('/login/Add', JSON.stringify({ 'id':2,'username':'2','password':'2','sex':'2','role':2,'phone':'2','email':'2'}), options).subscribe(function (data) {
    //
    //   console.log(data)
    // })
    let d1=new URLSearchParams();
    d1.append('id','2');
    d1.append('username','2');
    d1.append('password','2');
    d1.append('sex','2');
    d1.append('role','2');
    d1.append('phone','2');
    d1.append('email','2');
    this.http.post('/login/Add',d1)
      .map(res => res.json()).subscribe(function (data) {
        alert(JSON.stringify(data));
    })

    /*const body = {nId: 1, title: 1,content:1,date:1,url:1};
    this.http.post('/JsonTest/getJson', body ).subscribe(data => {
      console.log(data);
    });*/
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




