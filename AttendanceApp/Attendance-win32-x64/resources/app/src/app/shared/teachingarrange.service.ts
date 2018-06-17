import { Injectable } from '@angular/core';

@Injectable()
export class TeachingarrangeService {

  constructor() { }

  private arrangers: Arrange[] = [
    new Arrange(1,'软件工程实训','张老师', '全周', 1, 12,'星期四', '上午',3,4,"数计楼3号101",'17计算机'),
    new Arrange(2,'计算机工程实训','张老师', '单周', 1, 18, '星期五','上午',1,4,"数计楼3号101",'17计算机'),
    new Arrange(3,'云计算','张老师', '双周', 1, 18, '星期二','下午',7,8,"数计楼3号101",'17计算机'),
    new Arrange(4,'智能技术','张老师', '全周', 1,18, '星期三','下午',5,8,"数计楼3号101",'17计算机'),
    new Arrange(5,'工程英语','张老师', '双周', 1, 18, '星期一','下午',5,6,"数计楼3号101",'17计算机')
  ];

  getArranges(): Arrange[] {
    return this.arrangers;
  }
  getArrange(id: number): Arrange {
    var arranger =this.arrangers.find(arranger => arranger.id ==id);;
    if(!arranger){
      arranger =new Arrange(0, '', '', '', 0, 0, '','',0,0,'','');
    }
    return arranger;
  }
}

export class Arrange {
  constructor(public id: number,
              public name: string,
              public teacher:string,
              public singordouble:string,
              public startweek:number,
              public endweek:number,
              public week:string,
              public pmoram:string,
              public startclass:number,
              public endclass:number,
              public classroom:string,
              public classname:string){

  }
}
