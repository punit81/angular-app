import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
demoData:string="Hello 123";
  ngOnInit(): void {
  }
showAlert(){
  alert("Hello World....!");
  this.demoData="Hello World...!";
}
}
