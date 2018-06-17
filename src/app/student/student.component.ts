import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../shared/student.service';
import {Student} from '../shared/student.service';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";
import {Http,URLSearchParams} from "@angular/http";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private students:Array<Student>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  public pageindex:number=1;
  public pagesize:number=10;
  displayData:Array<Student>;
  sortName = null;
  sortValue = null;

  panels = [
    {
      active: false,
      disable:false,
      name  : '高级搜索'
    }
  ];

  constructor(public http:Http,public router: Router,private studentService:StudentService,private storage:LocalstorageService) {

    //console.log(this.storage.getItem('s'));
  }

  ngOnInit() {
    this.http.get('/login/SelectStudent').map(res=>res.json()).subscribe(data =>
      {
        this.students=data['data'];
        console.log(data);
        this.displayData = [ ...this.students];

        this.nameFilter.valueChanges
          .debounceTime(500)
          .subscribe(value =>this.keywork=value);
        this.displayData = [ ...this.students];
      }
    );
  }
  create() {
    this.router.navigateByUrl('/test/student/-1');
  }
  update(student: Student,key) {
    this.router.navigateByUrl('/test/student/' + key);
  }
  delete(key){
    console.log(key);
    let d1=new URLSearchParams();
    d1.append('id',key);
    this.http.post('/login/DeleteStudent',d1)
      .map(res => res.json()).subscribe(function (data) {
      alert(JSON.stringify(data));
      this.students=data['data'];
      this.displayData = [ ...this.students];
    })
  }

  Refresh()
  {
    this.http.get('/login/SelectStudent').map(res=>res.json()).subscribe(data =>
      {
        this.students=data['data'];
        console.log(data);
        this.displayData = [ ...this.students];

        this.nameFilter.valueChanges
          .debounceTime(500)
          .subscribe(value =>this.keywork=value);
        this.displayData = [ ...this.students];
      }
    );
  }

  changepagesize(e)
  {
    if(e.keyCode==13)
    {
        console.log("每页显示数据发送改变");
        blur();
    }
  }

  //////////////////////////////////////
  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();

  }


  search(): void {

    /** sort data **/
    if (this.sortName) {
      this.displayData = this.students.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.students;
      this.displayData = this.students;
    }
    this.displayData = [ ...this.students];
  }

}


