import { Component, OnInit } from '@angular/core';
import {Teacher, TeacherService} from "../shared/teacher.service";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  private teachers:Array<Teacher>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  public pageindex:number=1;
  public pagesize:number=10;
  displayData:Array<Teacher>;
  sortName = null;
  sortValue = null;
  panels = [
    {
      active: false,
      disable:false,
      name  : '高级搜索'
    }
  ];

  constructor(public router: Router,private storage:LocalstorageService,private teacherService:TeacherService)
  {
    console.log(this.storage.getItem('t'));

  }

  ngOnInit() {
    this.teachers=this.storage.getItem('t');
    if(!this.teachers)
    {
      this.teachers=this.teacherService.getTeachers();
      this.storage.setItem('t',this.teachers);
    }

    this.displayData = [ ...this.teachers];

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);
    this.displayData = [ ...this.teachers];


    /*this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);*/
  }

  create() {
    this.router.navigateByUrl('/test/teacher/-1');
  }
  update(teacher: Teacher,key) {
    this.router.navigateByUrl('/test/teacher/' + key);
  }
  delete(key){
    this.teachers=this.teachers.filter(d => d.id !== key);
    this.storage.setItem('t',this.teachers);
    this.displayData = [ ...this.teachers];
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
      this.displayData = this.teachers.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.teachers;
      this.displayData = this.teachers;
    }
    this.displayData = [ ...this.teachers];
  }

}
