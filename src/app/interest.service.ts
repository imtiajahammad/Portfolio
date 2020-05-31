import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interest } from './interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http:HttpClient) { }

  private _url: string="/assets/data/interest.json";
  getInterestInfo(){
    return this.http.get<interest[]>(this._url);
  }
}
