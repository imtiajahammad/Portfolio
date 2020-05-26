import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private _experienceServive: ExperienceService) { }
  public ab=[];
  ngOnInit(): void {
    this._experienceServive.getExperienceInfo()
    .subscribe(data=> this.ab=data); 
  }

}
