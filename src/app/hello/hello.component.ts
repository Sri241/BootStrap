import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  //properties
  serverID:number=10;
  serverStatus:String="OnLine";
  mainServer:boolean=true;

  name:string='James Gosling';
  age:number=23;
  salary:number=1500;
  
  firstName:string='Rajasekhar';
  lastName:string='gs';

  imagePath:string="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201307/wipro_660_071913035442.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  //methods
  getFullName():string{
    return this.firstName+' '+this.lastName;

  
  }

  convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

  
}
