import { Injectable } from '@angular/core';
import {ServiceBaseService} from "./service-base.service";

@Injectable()
export class GetServiceService {

  constructor(private serviceBase: ServiceBaseService) { }
// 获取数据
  getData() {
    const url = '/JsonTest/getJson';
    return this.serviceBase.getData(url);
  }
}
