import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {

  public meter:number=10;
  constructor() { }

  ngOnInit() {
  }

}
