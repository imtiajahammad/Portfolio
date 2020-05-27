import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { About } from '../about';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _aboutService: AboutService) { }
  public variable: string="I am imtiaj";
  public ab:About=new About();
  /*public ab=[];*/
  ngOnInit(): void {
    /*this._aboutService.getAboutInfo()
      .subscribe(data=> this.ab=data);*/
      this._aboutService.getAboutInfo()
      .subscribe(data => {this.ab=data; /*console.log(data)*/})
  }
  
  

}
