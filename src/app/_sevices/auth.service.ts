import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient: HttpClient) { }
  
  login(user: user) :Observable <any>  {
   return this.HttpClient.post<any>(environment.baseUrl+'user/login',user)
 }

}

interface user{
  email: string;
  password:string;
  
}