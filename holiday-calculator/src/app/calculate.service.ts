import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private _http:HttpClient) { }

  calculateData(body:any){
    return this._http.post(`http://localhost:8000/payouts`,body)
  }
}
