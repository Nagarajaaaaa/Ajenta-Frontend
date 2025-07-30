import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor (private http:HttpClient){

  }


  postMail(mailData:any){
    const url=`http://127.0.0.1:8000/api/send-mail`;
   return this.http.post(url,mailData);

  }


  
}
