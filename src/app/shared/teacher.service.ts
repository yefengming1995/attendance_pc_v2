import { Injectable } from '@angular/core';

@Injectable()
export class TeacherService {

  constructor() { }

  private teachers: Teacher[] = [
    new Teacher(1, '张三', '男', '数学与计算机科学', '讲师', '18888888888', '123456@qq.com'),
    new Teacher(2, '李四', '男', '数学与计算机科学', '讲师', '18888888888', '123456@qq.com'),
    new Teacher(3, '王五', '男', '数学与计算机科学', '副教授', '18888888888', '123456@qq.com'),
    new Teacher(4, '赵六', '男', '数学与计算机科学', '教授', '18888888888', '123456@qq.com'),
    new Teacher(5, '田七', '男', '数学与计算机科学', '教授', '18888888888', '123456@qq.com')
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }
  getTeacher(id: number): Teacher {
    var teacher =this.teachers.find(teacher => teacher.id ==id);;
    if(!teacher){
      teacher =new Teacher(0, '', '', '', '', '', '');
    }
    return teacher;
  }

}


export class Teacher {
  constructor(public id: number,
              public name: string,
              public gender: string,
              public department: string,
              public rank:string,
              public telephone: string,
              public email: string) {

  }
}
