import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class TestService {


  constructor(public http:Http) {

  }

  getTests():Observable<New[]>{
    return this.http.get('/JsonTest/getJson').map(res=>res.json());
  }
  getTest(id:number):Observable<New>{
    return this.http.get('/JsonTest/getJson'+id).map(res=>res.json());
  }

}

export class New {
  constructor(public name: string,
              public phone: string,
              public email: string) {

  }
}
