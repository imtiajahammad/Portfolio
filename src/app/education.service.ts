import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { education } from './education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  private _url:string="/assets/data/education.json";
  getEducationInfo(){
    return this.http.get<education[]>(this._url);
  }
}
