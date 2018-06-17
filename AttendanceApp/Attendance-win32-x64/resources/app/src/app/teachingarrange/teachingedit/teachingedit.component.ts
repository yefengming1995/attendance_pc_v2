import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalstorageService} from "../../services/localstorage.service";
import {TeachingarrangeService,Arrange} from "../../shared/teachingarrange.service";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-teachingedit',
  templateUrl: './teachingedit.component.html',
  styleUrls: ['./teachingedit.component.scss']
})
export class TeachingeditComponent implements OnInit {

  private arranges:Array<Arrange>;
  public arrangeId:number;
  public arrange:Arrange;
  public name:string='';
  public teacher:string='';
  public singordouble:string='';
  public startweek:number=0;
  public endweek:number=0;
  public week:string='';
  public pmoram:string='';
  public startclass:number=0;
  public endclass:number=0;
  public classroom:string='';
  public classname:string='';
  validateForm: FormGroup;
  listOfOption = [];
  listOfSelectedValue = [ 'a10', 'c12' ];
  public demoValue1:number;
  public demoValue2:number;
  public demoValue3:number;
  public demoValue4:number;
  constructor(private routerInfo:ActivatedRoute ,private arrangeService:TeachingarrangeService,
              private router:Router,private storage:LocalstorageService,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.arrangeId=this.routerInfo.snapshot.params['id'];
    console.log(this.arrangeId);
    if(this.arrangeId>=0)
    {
      this.arrange=this.storage.getItem('a')[this.arrangeId];
      this.name=this.arrange.name;
      this.teacher=this.arrange.teacher;
      this.singordouble=this.arrange.singordouble;
      this.startweek=this.arrange.startweek;
      this.endweek=this.arrange.endweek;
      this.week=this.arrange.week;
      this.pmoram=this.arrange.pmoram;
      this.startclass=this.arrange.startclass;
      this.endclass=this.arrange.endclass;
      this.classroom=this.arrange.classroom;
      this.classname=this.arrange.classname;
      console.log(this.storage.getItem('a')[this.arrangeId]);
    }
    const children = [];
    children.push({ label:'星期一' , value:'星期一' });
    children.push({ label:'星期二' , value:'星期二' });
    children.push({ label:'星期三' , value:'星期三' });
    children.push({ label:'星期四' , value:'星期四' });
    children.push({ label:'星期五' , value:'星期五' });
    children.push({ label:'星期六' , value:'星期六' });
    children.push({ label:'星期日' , value:'星期日' });
    this.listOfOption = children;

    this.validateForm = this.fb.group({
      name         : [ null, [ Validators.required ] ],
      teacher         : [ null, [ Validators.required ] ],
      classroom         : [ null, [ Validators.required ] ],
      students        : [ null, [ Validators.required ] ],
      radioValue    : [ null, [ Validators.required ] ],
      listOfSelectedValue: [ null, [ Validators.required ] ],
      demoValue1:[ null, [ Validators.required ] ],
      demoValue2:[ null, [ Validators.required ] ],
      demoValue3:[ null, [ Validators.required ] ],
      demoValue4:[ null, [ Validators.required ] ],
      //agree            : [ false ]
    });
  }



  /////////////////////////////////////////////

  cancel(){
    this.router.navigate(['/test/arrange']);
  }
  save(){
    //this.router.navigateByUrl('/arrange');
    if(this.arrangeId==-1)
    {
      var obj={
        id: this.storage.getItem('a').length+1,
        name: this.name,
        teacher:this.teacher,
        singordouble:this.singordouble,
        startweek:this.startweek,
        endweek:this.endweek,
        week:this.week,
        pmoram:this.pmoram,
        startclass:this.startclass,
        endclass:this.endclass,
        classroom:this.classroom,
        classname:this.classname
      }
      this.arranges =this.storage.getItem('a');
      this.arranges.push(obj);
      this.storage.setItem('s',this.arranges);
      console.log(this.arranges);
    }
    else
    {
      //修改
      this.arrange={
        id: this.storage.getItem('a')[this.arrangeId].id,
        name: this.name,
        teacher:this.teacher,
        singordouble:this.singordouble,
        startweek:this.startweek,
        endweek:this.endweek,
        week:this.week,
        pmoram:this.pmoram,
        startclass:this.startclass,
        endclass:this.endclass,
        classroom:this.classroom,
        classname:this.classname
      }
      this.arranges =this.storage.getItem('a');
      this.arranges[this.arrangeId]=this.arrange;
      console.log(this.arranges);
      this.storage.setItem('a',this.arranges);

    }

    alert("保存成功！")

  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


  handleDatePanelChange(mode: string): void {
    console.log('handleDatePanelChange: ', mode);
  }

  getCheckedList(): void
  {
    //console.log(this.nodes.props.getCheckedNodeList());
  }

}
