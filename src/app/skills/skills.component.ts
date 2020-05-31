import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private __skillService:SkillService) { }
  public ab=[];
  ngOnInit(): void {
    this.__skillService.getSkillInfo()
    .subscribe(data=> this.ab=data);
  }

}
