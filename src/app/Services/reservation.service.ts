import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../Model/Reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpclient : HttpClient) { }


  getReservationbyUserId(id : string):Observable<any>{
    const params = new HttpParams()
    .set('id', id) ; 
  

  return this.httpclient.get<any>(environment.baseUrl + 'reservation/reservationById', { params });
  }
  
////create

createResercvation(r : Reservation ):Observable<any>{
  return this.httpclient.post<any>(environment.baseUrl + 'reservation/create', r);
}
}
