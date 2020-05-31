import { Component, OnInit } from '@angular/core';
import { AwardsService } from '../awards.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor(private _awardsService:AwardsService) { }
  public ab=[];
  ngOnInit(): void {
    this._awardsService.getAwardsInfo()
    .subscribe(data=> this.ab=data);
  }

}
