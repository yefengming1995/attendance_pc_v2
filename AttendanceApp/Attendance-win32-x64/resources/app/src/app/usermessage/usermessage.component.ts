import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../shared/user.service";
import {User} from "../shared/user.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {LocalstorageService} from "../services/localstorage.service";

@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.scss']
})
export class UsermessageComponent implements OnInit {

  private users:Array<User>;
  private nameFilter:FormControl = new FormControl();
  private  keywork:string;
  ////////////////////////////////////////
  i = 5;
  editCache = {};
  dataSet = [];
  listOfSelection = [
    {
      text    : 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text    : 'Select Odd Row',
      onSelect: () => {
        this.dataSet.forEach((data, index) => data.checked = index % 2 !== 0);
        this.refreshStatus();
      }
    },
    {
      text    : 'Select Even Row',
      onSelect: () => {
        this.dataSet.forEach((data, index) => data.checked = index % 2 === 0);
        this.refreshStatus();
      }
    }
  ];
  allChecked = false;
  indeterminate = false;
  nameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];
  addressList = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [
    {
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name   : 'Jim Red',
      age    : 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  displayData = [  ];

  constructor(public router: Router,private userService:UserService,private storage:LocalstorageService) { }

  ngOnInit() {
    this.users=this.storage.getItem('u');
    if(!this.users)
    {
      this.users =this.userService.getUsers();
      this.storage.setItem('u',this.users);
    }
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);
    ///////////////////////////////////////////////

    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        key    : i.toString(),
        name   : `Edrward ${i}`,
        age    : 32,
        address: `London Park no. ${i}`,
      });
    }

    this.updateEditCache();

    this.displayData=[...this.dataSet];

  }
  checkAll(value: boolean): void {
    this.dataSet.forEach(data => data.checked = value);
    this.refreshStatus();
    this.displayData=[...this.dataSet];
  }

  refreshStatus(): void {
    const allChecked = this.dataSet.every(value => value.checked === true);
    const allUnChecked = this.dataSet.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }


  addRow(): void {
    this.i++;
    this.dataSet = [ ...this.dataSet, {
      key    : `${this.i}`,
      expand     : false,
      name   : `Edward King ${this.i}`,
      age    : '32',
      address: `London, Park Lane no. ${this.i}`,
      description:'猜猜看',

    } ];
    this.updateEditCache();
    this.displayData=[...this.dataSet];
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    console.log(i);
    this.dataSet = dataSet;
    console.log(this.dataSet);
    this.displayData=[...this.dataSet];
  }

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
    console.log(key);
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
    console.log(key);

  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
    console.log(key);
    this.displayData=[...this.dataSet];
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: item
        };
      }
    });
    this.displayData=[...this.dataSet];
  }
  /////////////////////////////////////////////////
  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.dataSet.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }


  /////////////////////////////////////

  create() {
    this.router.navigateByUrl('/test/user/0');
  }
  update(user: User) {
    this.router.navigateByUrl('/test/user/' + user.id);
  }
  delete(key){
    this.users.splice(key,1);
    this.storage.setItem('u',this.users);
  }

}
