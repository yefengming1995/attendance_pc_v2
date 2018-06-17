import { Component, OnInit ,ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from "../../shared/role.service";
import {RoleService} from "../../shared/role.service";
import {LocalstorageService} from "../../services/localstorage.service";
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-roleedit',
  templateUrl: './roleedit.component.html',
  styleUrls: ['./roleedit.component.scss']
})
export class RoleeditComponent implements OnInit {

  @ViewChild('nzTree') nzTree: NzTreeComponent;
  private roles:Array<Role>;
  public roleId:number;
  public name:string='';
  public desc:string='';
  public createdby:string='';
  public createdtime:string='';
  public modifyby:string='';
  public modifytime:string='';
  public role:Role;
  public len:number;
  public i:number;
  public test:Array<NzTreeNode>;
  public num:Array<string>=[];
  validateForm: FormGroup;
  expandKeys = [ '', '' ];
  checkedKeys = [ '', '' ];
  selectedKeys = [ '', '' ];
  expandDefault = false;
  nodes = [
    new NzTreeNode({
      title   : '是否菜单',
      key     : '1',
      children: [
        {
          title   : '信息管理',
          key     : '10',
          children: [
            {
              title   : '院系管理',
              key     : '100',
              children: []
            },
            {
              title   : '教师管理',
              key     : '101',
              children: []
            },
            {
              title   : '学生管理',
              key     : '102',
              children: []
            },
            {
              title   : '课程管理',
              key     : '103',
              children: []
            },
            {
              title   : '授课安排',
              key     : '104',
              children: []
            }
          ]
        },
        {
          title   : '考勤管理',
          key     : '11',
          children: [
            {
              title   : '历史记录',
              key     : '110',
              children: []
            },
            {
              title   : '考勤排行榜',
              key     : '111',
              children: []
            },
            {
              title   : '考勤参数设置',
              key     : '112',
              children: []
            }
          ]
        },
        {
          title   : '成绩管理',
          key     : '12',
          children: [
            {
              title   : '统计成绩',
              key     : '120',
              children: []
            }
          ]
        },
        {
          title   : '系统管理',
          key     : '13',
          children: [
            {
              title   : '角色管理',
              key     : '130',
              children: []
            },
            {
              title   : '用户管理',
              key     : '131',
              children: []
            },
            {
              title   : '权限管理',
              key     : '132',
              children: []
            }
          ]
        }
      ]
    }),
    new NzTreeNode({
      title   : '是否http',
      key     : '2',
      children: [
        {
          title          : 'child2.1',
          key            : '10021',
          children       : [],
          disableCheckbox: true
        },
        {
          title   : 'child2.2',
          key     : '10022',
          children: [
            {
              title : 'grandchild2.2.1',
              key   : '100221',
              isLeaf: true
            }
          ]
        }
      ]
    })
  ];
  dateMode = 'time';
  constructor(private routerInfo:ActivatedRoute ,private roleService:RoleService,
              private router:Router,private storage:LocalstorageService,private fb: FormBuilder) { }

  ngOnInit() {
    this.roleId=this.routerInfo.snapshot.params['id'];
    //this.len=this.storage.getItem('r').length;
    this.roles =this.storage.getItem('r');
    if(this.roleId!=-1)
    {
      this.role=this.storage.getItem('r')[this.roleId];
      this.desc=this.role.desc;
      this.name=this.role.name;
      this.createdby=this.role.createdby;
      this.createdtime=this.role.createdtime;
      this.modifyby=this.role.modifyby;
      this.modifytime=this.role.modifytime;
    }

    this.validateForm = this.fb.group({
      name         : [ null, [ Validators.required ] ],
      createdby         : [ null, [ Validators.required ] ],
      createdtime         : [ null, [ Validators.required ] ],
      modifyby         : [ null, [ Validators.required ] ],
      modifytime         : [ null, [ Validators.required ] ],
      nodes             : [ null, [ Validators.required ] ],
      comment          : [ null, [ Validators.required ] ]
      //agree            : [ false ]
    });

    //console.log(this.roleId);
    registerLocaleData(zh);
  }

  cancel(){
    this.router.navigateByUrl('/test/role');
  }

  mouseAction(name: string, event: NzFormatEmitEvent): void {
    console.log(name, event);
    // just for demo, should get in ngAfterViewInit
    console.log('checkedNodes: %o', this.nzTree.getCheckedNodeList());
    console.log('selectedNodes: %o', this.nzTree.getSelectedNodeList());
    console.log(this.nzTree.nzTreeService.getCheckedNodeList());
    this.test=this.nzTree.nzTreeService.getCheckedNodeList();
    if(this.test)
    {
      this.num=[];
      for(this.i=0;this.i<this.test.length;this.i++)
      {
        console.log(this.test[this.i]['key']);
        this.num.push(this.test[this.i]['key']);
        console.log(this.num);
      }
    }


  }
  save(){
    if(this.roleId==-1)//新增
    {
      this.roles =this.storage.getItem('r');
      var obj={
        id: 1,
        name: this.name,
        desc:this.desc,
        createdby:this.createdby,
        createdtime:this.createdtime,
        modifyby:this.modifyby,
        modifytime:this.modifytime,
        keys:this.num
      }
      this.roles.push(obj);
      console.log(this.roles);
      /*2018-5-25bug：循环引用*/
      this.storage.setItem('r',this.roles);
    }
    else//编辑
    {
      this.role={
        id: 1,
        name: this.name,
        desc:this.desc,
        createdby:this.createdby,
        createdtime:this.createdtime,
        modifyby:this.modifyby,
        modifytime:this.modifytime,
        keys:this.num
      }
      //this.roles =this.storage.getItem('r');
      this.roles[this.roleId]=this.role;
      console.log(this.roles);
      this.storage.setItem('r',this.roles);
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

  handleDateOpenChange(open: boolean): void {
    if (open) {
      this.dateMode = 'time';
    }
  }

  handleDatePanelChange(mode: string): void {
    console.log('handleDatePanelChange: ', mode);
  }

  getCheckedList(): void
  {
      //console.log(this.nodes.props.getCheckedNodeList());
  }

}
