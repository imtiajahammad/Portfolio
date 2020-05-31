import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor( private http: HttpClient) { }
  private _url:string="/assets/data/skill.json";
  getSkillInfo(){
    return this.http.get<skill[]>(this._url);
  }
}
