import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { awards } from 'src/awards';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {

  constructor(private http: HttpClient) { }
  private _url: string="/assets/data/awards.json";
  getAwardsInfo(){
    return this.http.get<awards[]>(this._url);
  }
}
