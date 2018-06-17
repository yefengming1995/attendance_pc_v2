import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }

  /*private students: Student[] = [
    new Student(1, '张三', '男', '数学与计算机科学', '计算机技术', '18888888888', '123456@qq.com'),
    new Student(2, '李四', '男', '数学与计算机科学', '计算机技术', '18888888888', '123456@qq.com'),
    new Student(3, '王五', '男', '数学与计算机科学', '计算机技术', '18888888888', '123456@qq.com'),
    new Student(4, '赵六', '男', '数学与计算机科学', '计算机技术', '18888888888', '123456@qq.com'),
    new Student(5, '田七', '男', '数学与计算机科学', '计算机技术', '18888888888', '123456@qq.com')
  ];

  getStudents(): Student[] {
    return this.students;
  }
  getStudent(id: number): Student {
    var student =this.students.find(student => student.id ==id);;
    if(!student){
      student =new Student(0, '', '', '', '', 0);
    }
    return student;
  }*/

}

export class Student {
  constructor(public id: string,
              public name: string,
              public sex: string,
              public department: string,
              public major: string,
              public entranceYear: string) {

  }
}
