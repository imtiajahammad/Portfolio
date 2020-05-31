import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private _interestService:InterestService) { }
  public ab=[];

  ngOnInit(): void {
    this._interestService.getInterestInfo()
    .subscribe(data=> this.ab=data);
  }

}
