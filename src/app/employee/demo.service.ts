import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
  apiRoot: string = "http://5b1e94cb4d4fc00014b07dfc.mockapi.io/getemployee"; 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        let url = `${this.apiRoot}`;
        return this.http.get(url);
    }
}