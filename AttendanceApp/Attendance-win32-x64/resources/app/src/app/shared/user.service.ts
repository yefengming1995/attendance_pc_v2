import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  private users: User[] = [
    new User(1, 'admin', '2018-4-10', '', '2018-5-11','系统管理员'),
    new User(2, 'teacher1', '2018-5-11', '', '2018-5-11','教师'),
    new User(3, 'student1', '2018-5-11', '', '2018-5-11','学生'),
    new User(4, 'teacher2', '2018-5-11', '', '2018-5-11','教师'),
    new User(5, 'student2', '2018-5-11', '', '2018-5-11','学生')
  ];

  getUsers(): User[] {
    return this.users;
  }
  getUser(username: string): User {
    var user =this.users.find(user => user.username ==username);
    if(!user){
      user =new User(0, '', '', '', '', '');
    }
    return user;
  }

}

export class User {
  constructor(public id: number,
              public username: string,
              public password:string,
              public role:string) {

  }
}
