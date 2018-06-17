import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from '../../shared/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from "../../services/localstorage.service";

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss']
})
export class StudenteditComponent implements OnInit {

  private students:Array<Student>;
  public studentId:number;
  public student:Student;
  public name:string='';
  public department:string='';
  public major:string='';
  public radioValue = '女';
  constructor(private routerInfo:ActivatedRoute ,private studentService:StudentService,
   private router:Router,private storage:LocalstorageService) { }

  ngOnInit() {
    this.studentId=this.routerInfo.snapshot.params['id'];
    console.log(this.studentId);
    if(this.studentId>=0)
    {
      this.student=this.storage.getItem('s')[this.studentId];
      this.department=this.student.department;
      this.name=this.student.name;
      this.major=this.student.major;
      this.radioValue=this.student.gender;
      console.log(this.storage.getItem('s')[this.studentId]);
    }


  }

  cancel(){
    this.router.navigate(['/test/student']);
  }
  save(){
    //this.router.navigateByUrl('/student');
    if(this.studentId==-1)
    {
      var obj={
        id: this.storage.getItem('s').length+1,
        name: this.name,
        gender: this.radioValue,
        department: this.department,
        major: this.major,
        telephone: '18888888888',
        email: '123456@qq.com'
      }
      this.students =this.storage.getItem('s');
      this.students.push(obj);
      this.storage.setItem('s',this.students);
      console.log(this.students);
    }
    else
    {
      //修改
      this.student={
        id: this.storage.getItem('s')[this.studentId].id,
        name: this.name,
        gender: this.radioValue,
        department: this.department,
        major: this.major,
        telephone: '18888888888',
        email: '123456@qq.com'
      }
      this.students =this.storage.getItem('s');
      this.students[this.studentId]=this.student;
      console.log(this.students);
      this.storage.setItem('s',this.students);

    }

    alert("保存成功！")

  }

}
