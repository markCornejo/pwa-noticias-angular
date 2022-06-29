import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {



  constructor(
    private http: HttpClient
  ) { }

  saveToken = (token) => {
    return this.http.post(`${apiUlr}/notifications/save`, 
      {
        token
      }
    );
  }
  
}
