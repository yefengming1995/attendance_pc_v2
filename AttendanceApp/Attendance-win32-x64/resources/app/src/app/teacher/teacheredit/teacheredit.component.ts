import { Component, OnInit } from '@angular/core';
import {TeacherService,Teacher} from "../../shared/teacher.service";
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from "../../services/localstorage.service";

@Component({
  selector: 'app-teacheredit',
  templateUrl: './teacheredit.component.html',
  styleUrls: ['./teacheredit.component.scss']
})
export class TeachereditComponent implements OnInit {

  private teachers:Array<Teacher>;
  public teacherId:number;
  public teacher:Teacher;
  public name:string='';
  public department:string='';
  public rank:string='';
  public radioValue = '女';
  constructor(private routerInfo:ActivatedRoute ,private teacherService:TeacherService,
              private router:Router,private storage:LocalstorageService) { }

  ngOnInit() {
    this.teacherId=this.routerInfo.snapshot.params['id'];
    console.log(this.teacherId);
    if(this.teacherId>=0)
    {
      this.teacher=this.storage.getItem('s')[this.teacherId];
      this.department=this.teacher.department;
      this.name=this.teacher.name;
      this.rank=this.teacher.rank;
      this.radioValue=this.teacher.gender;
      console.log(this.storage.getItem('t')[this.teacherId]);
    }
  }

  cancel(){
    this.router.navigate(['/test/teacher']);
  }
  save(){
    //this.router.navigateByUrl('/student');
    if(this.teacherId==-1)
    {
      var obj={
        id: this.storage.getItem('t').length+1,
        name: this.name,
        gender: this.radioValue,
        department: this.department,
        rank: this.rank,
        telephone: '18888888888',
        email: '123456@qq.com'
      }
      this.teachers =this.storage.getItem('t');
      this.teachers.push(obj);
      this.storage.setItem('t',this.teachers);
      console.log(this.teachers);
    }
    else
    {
      //修改
      this.teacher={
        id: this.storage.getItem('t')[this.teacherId].id,
        name: this.name,
        gender: this.radioValue,
        department: this.department,
        rank: this.rank,
        telephone: '18888888888',
        email: '123456@qq.com'
      }
      this.teachers =this.storage.getItem('t');
      this.teachers[this.teacherId]=this.teacher;
      console.log(this.teachers);
      this.storage.setItem('t',this.teachers);

    }

    alert("保存成功！")

  }

}
