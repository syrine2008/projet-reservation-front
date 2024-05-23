import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }

  getConnexion(login: string, mdp: string):Observable<any> {

    const params = new HttpParams()
      .set('login', login)
      .set('mdp', mdp);

    return this.httpclient.get<any>(environment.baseUrl + 'user/connexion', { params });
  }
  createUser(user : User):Observable<any>{

    return this.httpclient.post<any>(environment.baseUrl + 'user/create' , user)
    
  }
}
