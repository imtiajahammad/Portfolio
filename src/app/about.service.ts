import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from './about';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }


  private _url:string="/assets/data/about.json";
  getAboutInfo(){
    return this.http.get<About>(this._url);
    
  }

  /*getAboutInfo(): Observable<IAbout>{
    return this.http.get<IAbout>(this._url);                    
  }*/
}
