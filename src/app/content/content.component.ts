import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';
  pageBoard='';
  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
          if (event.url === '/test/welcome') {
            this.pageTitle = '首页';
            this.pageDesc = '';
            this.pageBoard='';
          } else if (event.url.startsWith('/test/student')) {
            this.pageTitle = '学生管理';
            this.pageDesc = '';
            this.pageBoard='学生管理'
          }else if (event.url.startsWith('/test/teacher')) {
            this.pageTitle = '教师管理';
            this.pageDesc = '';
            this.pageBoard='教师管理'
          }else if (event.url.startsWith('/test/role')) {
            this.pageTitle = '角色管理';
            this.pageDesc = '';
            this.pageBoard='角色管理'
          }else if (event.url.startsWith('/test/user')) {
            this.pageTitle = '用户管理';
            this.pageDesc = '';
            this.pageBoard='用户管理'
          }else if (event.url.startsWith('/test/department')) {
            this.pageTitle = '院系管理';
            this.pageDesc = '';
            this.pageBoard='院系管理'
          }else if (event.url.startsWith('/test/course')) {
            this.pageTitle = '课程管理';
            this.pageDesc = '';
            this.pageBoard='课程管理'
          }else if (event.url.startsWith('/test/teachingarrange')) {
            this.pageTitle = '授课管理';
            this.pageDesc = '';
            this.pageBoard='授课管理'
          } else if (event.url.startsWith('/test/historyrecord')) {
            this.pageTitle = '历史记录';
            this.pageDesc = '';
            this.pageBoard='历史记录'
          }else if (event.url.startsWith('/test/parameter')) {
            this.pageTitle = '考勤参数设置';
            this.pageDesc = '';
            this.pageBoard='考勤参数设置'
          }else if (event.url.startsWith('/test/rankinglist')) {
            this.pageTitle = '考勤排行榜';
            this.pageDesc = '';
            this.pageBoard='考勤排行榜'
          }else if (event.url.startsWith('/test/permission')) {
            this.pageTitle = '权限管理';
            this.pageDesc = '';
            this.pageBoard='权限管理'
          }else if (event.url.startsWith('/test/askforleave')) {
            this.pageTitle = '请假管理';
            this.pageDesc = '';
            this.pageBoard='请假管理'
          }else if (event.url.startsWith('/test/test1')) {
            this.pageTitle = '统计成绩';
            this.pageDesc = '';
            this.pageBoard='统计成绩'
          }
        });
  }

  ngOnInit() {
  }

}
