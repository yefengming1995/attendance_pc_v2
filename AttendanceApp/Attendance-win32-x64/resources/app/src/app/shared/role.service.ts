import { Injectable } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd';

@Injectable()
export class RoleService {

  //public checked:Array<NzTreeNode>=[];
  constructor() { }
  private roles: Role[] = [
    new Role(1, '系统管理员', '管理系统人员', '系统管理员1', '2018-5-11', '系统管理员1', '2018-5-11',[]),
    new Role(2, '教师', '教师端用户', '系统管理员1', '2018-5-11', '系统管理员1', '2018-5-11',[]),
    new Role(3, '学生', '学生端用户', '系统管理员1', '2018-5-11', '系统管理员1', '2018-5-11',[])
  ];

  getRoles(): Role[] {
    return this.roles;
  }
  getRole(id: number): Role {
    var role =this.roles.find(role => role.id ==id);
    if(!role){
      role =new Role(0, '', '', '', '', '', '',[]);
    }
    return role;
  }

}

export class Role {
  constructor(public id: number,
              public name: string,
              public desc: string,
              public createdby: string,
              public createdtime: string,
              public modifyby: string,
              public modifytime: string,
              public keys:Array<string>) {

  }
}
