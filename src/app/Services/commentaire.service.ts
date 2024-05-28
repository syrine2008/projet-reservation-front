import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../Model/Commentaire';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpclient : HttpClient) { }


  addCommentaire(commentaire : Commentaire):Observable<any>{
    return this.httpclient.post<any>(environment.baseUrl + 'commentaire/addCommentaire', commentaire);
  }
}
