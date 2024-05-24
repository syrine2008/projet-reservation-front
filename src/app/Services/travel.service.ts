import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Travel} from '../Model/Travel'; 
import { FilterObject } from '../Model/FilterObject';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private httpclient : HttpClient) { }

getTravels():Observable<Travel[]>{
  return this.httpclient.get<any[]>(environment.baseUrl+"travel/") ;
}

getDestinations():Observable<any>{
  return this.httpclient.get<any>(environment.baseUrl+"travel/destinations");
}

///travel/filtredTravel

getFiltredTravel(list : FilterObject[]):Observable<Travel[]>{
   return this.httpclient.post<Travel[]>(environment.baseUrl+"travel/filtredTravel", list) ;
}



getTravelsByOwner(user : User):Observable<Travel[]>{
  return this.httpclient.post<Travel[]>(environment.baseUrl+"travel/travelByOwnerId", user) ;
}

createTravel(travel : Travel):Observable<any>{
  return this.httpclient.post<any>(environment.baseUrl+"travel/create", travel) ;
}
deleteReservationById(id : string):Observable<any>{
  const params = new HttpParams()
  .set('id', id) ; 


return this.httpclient.get<any>(environment.baseUrl + 'travel/deleteTravel', { params });
}

}
