import { Component, OnInit } from '@angular/core';
import {Student, StudentService} from '../../shared/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from "../../services/localstorage.service";
import {Http,RequestOptions,Headers,URLSearchParams,HttpModule  } from "@angular/http";
//import {HttpRequestService} from "../services/http-request.service";

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.scss']
})
export class StudenteditComponent implements OnInit {

  private students:Array<Student>;
  public studentId:string;
  public student:Student;
  public name:string='';
  public department:string='';
  public major:string='';
  public radioValue = '女';
  public id1:string;
  public entranceYear:string;
  public stuid:string;
  constructor(private routerInfo:ActivatedRoute ,private studentService:StudentService,
   private router:Router,private storage:LocalstorageService,public http:Http) { }

  ngOnInit() {
    this.studentId=this.routerInfo.snapshot.params['id'];
    console.log(this.studentId);
    if(this.studentId!='-1')
    {
      this.http.get('/login/SelectStudent').map(res=>res.json()).subscribe(data => {
        this.students = data['data'];
        console.log(data);
        this.student=this.students.find(key=>key.id==this.studentId);
        console.log(this.student);
        this.department=this.student.department;
        this.name=this.student.name;
        this.major=this.student.major;
        this.radioValue=this.student.sex;
        this.id1=this.student.id;
        this.entranceYear=this.student.entranceYear;
        }
      );
    }
  }

  cancel(){
    this.router.navigate(['/test/student']);
  }
  save(){
    //this.router.navigateByUrl('/student');
    if(this.studentId=='-1')
    {
      let d1=new URLSearchParams();
      d1.append('id',this.id1);
      d1.append('name',this.name);
      d1.append('sex',this.radioValue);
      d1.append('department',this.department);
      d1.append('major',this.major);
      d1.append('entranceYear',this.entranceYear);
      this.http.post('/login/AddStudent',d1)
        .map(res => res.json()).subscribe(function (data) {
        alert(JSON.stringify(data));
      })
    }
    else
    {
      //修改
      let d1=new URLSearchParams();
      d1.append('id',this.id1);
      d1.append('name',this.name);
      d1.append('sex',this.radioValue);
      d1.append('department',this.department);
      d1.append('major',this.major);
      d1.append('entranceYear',this.entranceYear);
      this.http.post('/login/UpdateStudent',d1)
        .map(res => res.json()).subscribe(function (data) {
        alert(JSON.stringify(data));
      })
      /*this.student={
        id: this.storage.getItem('s')[this.studentId].id,
        name: this.name,
        sex: this.radioValue,
        department: this.department,
        major: this.major

      }
      this.students =this.storage.getItem('s');
      this.students[this.studentId]=this.student;
      console.log(this.students);
      this.storage.setItem('s',this.students);*/

    }

    alert("保存成功！")

  }

}
