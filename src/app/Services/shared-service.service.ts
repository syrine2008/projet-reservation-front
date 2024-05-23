import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private httpclient : HttpClient) { }

  getcoutries():Observable<any>{
    return this.httpclient.get<string[]>('https://restcountries.com/v3.1/all') ; 
  }
}
