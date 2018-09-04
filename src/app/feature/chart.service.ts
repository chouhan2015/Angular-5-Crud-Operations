import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class chartService {

  constructor(private _http: HttpClient) { }
  
  dailyForecast() {
    return this._http.get("http://localhost:3000/charts")
      .map(result => result);
  }

}
