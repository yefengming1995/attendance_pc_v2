import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from "../shared/role.service";
import {Role} from "../shared/role.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  private roles:Array<Role>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  constructor(public router: Router,private roleService:RoleService,private storage:LocalstorageService) { }

  ngOnInit() {

    this.roles=this.storage.getItem('r');
    if(!this.roles)
    {
      this.roles=this.roleService.getRoles();
      this.storage.setItem('r',this.roles);
    }
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);
  }

  create() {
    this.router.navigateByUrl('/test/role/-1');
  }
  update(role: Role,key) {
    this.router.navigateByUrl('/test/role/' + key);
  }

  delete(key){
    this.roles.splice(key,1);
    this.storage.setItem('r',this.roles);
  }

}
