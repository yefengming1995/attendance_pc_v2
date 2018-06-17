import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";
import {Router} from '@angular/router';
import {TeachingarrangeService} from "../shared/teachingarrange.service";
import {Arrange} from "../shared/teachingarrange.service";

@Component({
  selector: 'app-teachingarrange',
  templateUrl: './teachingarrange.component.html',
  styleUrls: ['./teachingarrange.component.scss']
})
export class TeachingarrangeComponent implements OnInit {

  private arranges:Array<Arrange>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  public pageindex:number=1;
  public pagesize:number=10;
  displayData:Array<Arrange>;
  sortName = null;
  sortValue = null;
  panels = [
    {
      active: false,
      disable:false,
      name  : '高级搜索'
    }
  ];
  constructor(public router: Router,private ArrangeService:TeachingarrangeService,private storage:LocalstorageService) { }

  ngOnInit() {
    this.arranges =this.storage.getItem('a');
    if(!this.arranges)
    {
      this.arranges=this.ArrangeService.getArranges();
      this.storage.setItem('a',this.arranges);
    }
    this.displayData = [ ...this.arranges];

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);
    this.displayData = [ ...this.arranges];
  }

  create() {
    this.router.navigateByUrl('/test/teachingarrange/-1');
  }
  update(arrange: Arrange,key) {
    this.router.navigateByUrl('/test/teachingarrange/' + key);
  }
  delete(key){
    this.arranges=this.arranges.filter(d => d.id !== key);
    this.storage.setItem('a',this.arranges);
    this.displayData = [ ...this.arranges];
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
      this.displayData = this.arranges.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.arranges;
      this.displayData = this.arranges;
    }
    this.displayData = [ ...this.arranges];
  }

}
