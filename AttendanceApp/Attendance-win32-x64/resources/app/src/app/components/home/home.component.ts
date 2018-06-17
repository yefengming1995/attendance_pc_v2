import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {relativeTimeRounding} from "admin-lte/bower_components/moment/moment";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [ 1,2,3,4];
  /*data = new Array(3).fill({}).map((i, index) => {
    return{
      href: 'http://www.fzu.edu.cn/',
      title: `福大新闻 ${index}`,
      avatar: '',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });*/
  private data: News[]=[
    new News('\'http://www.fzu.edu.cn/\'','福大新闻','../../../assets/images/new2.png','福大学子喜获2018年海峡论坛首届创意涂鸦大奖赛三等奖','6月2日至7日，“打破界限”海峡论坛首届创意涂鸦大奖赛于在厦门集美大社举行。专家评审组从100多幅初选稿件中，通过三轮评选，选出六幅设计稿跻身决赛。福州大学厦门工艺美院涂鸦团队挺进决赛，作品《女人花》获得三等奖。'),
    new News('\'http://www.fzu.edu.cn/\'','福大新闻','../../../assets/images/new3.png','数学与计算机科学学院：举办第一届第一期数计青年“牛牛汇”活动','6月2日至7日，“6月8日晚，以“就业升学”为主题的第一届第一期数计青年“牛牛汇”活动于福州大学数计学院七号报告厅正式上线。宣传部、学生处、教务处、校团委等相关负责人，数计学院领导老师及数计学工组全体成员共同参加了本次活动。'),
    new News('\'http://www.fzu.edu.cn/\'','福大新闻','../../../assets/images/new4.png','福大超算代表队荣获ASC2018全球总决赛一等奖 HPL项目打破ASC17赛会记录','6月2日至7日，“日前，2018世界大学生超级计算机竞赛（ASC2018）总决赛在江西南昌大学圆满落幕。经过5天的激烈角逐，福州大学超算代表队作为福建省高校首次进入总决赛的队伍，荣获全球总决赛一等奖，并在HPL性能测试项目上以每秒33.7万亿次浮点运算性能排名第七，打破了ASC17创造的31.7万亿次/每秒的赛会纪录。')
  ];
  constructor() { }

  ngOnInit() {
    registerLocaleData(zh);
  }
  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onModeChange(mode: 'month'|'year'): void {
    console.log(`Current mode: ${mode}`);
  }

}

export class News {
  constructor(public href: string,
              public title: string,
              public avatar: string,
              public description: string,
              public content: string) {

  }
}
