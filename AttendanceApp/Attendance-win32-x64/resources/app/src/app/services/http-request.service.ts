import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequestService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };
  constructor(private httpClient : HttpClient) {
  }

  httpPost(reqUrl : string, reqBody, comp, flag) {
    //后台接收数据 需要 @RequestBody 标签
    this.httpClient.post(reqUrl, reqBody, this.httpOptions)
      .subscribe(
        val => {
          console.log('post请求成功', val);

          if(val['success']){
            comp.postOk(val, flag);
          }else{
            comp.postErr(val, flag);
          }
        },
        error => {
          console.log('post请求失败', error);
          comp.postErr(error, flag);
        }
      );
  }

  httpGet(reqUrl, comp, flag){
    this.httpClient.get(reqUrl, this.httpOptions)
      .subscribe(
        val => {
          console.log('get请求成功', val);

          if(val['success']){
            comp.getOk(val, flag);
          }else{
            comp.getErr(val, flag);
          }

        },
        error => {
          console.log('get请求失败', error);
          comp.getErr(error, flag);
        }
      );
  }

  show() : string {
    return '我是 HttpRequestService 调用我干嘛';
  }


}
