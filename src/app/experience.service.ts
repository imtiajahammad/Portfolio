import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from './Experience';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }
  private _url:string="/assets/data/experience.json";
  getExperienceInfo(){
    return this.http.get<Experience[]>(this._url);
  }
}
