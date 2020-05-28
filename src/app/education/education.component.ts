import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private _educationService:EducationService) { }
  public ab=[];
  ngOnInit(): void {
    this._educationService.getEducationInfo()
    .subscribe(data=> this.ab=data);
  }

}
