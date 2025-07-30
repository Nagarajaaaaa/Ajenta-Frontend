import { Component } from '@angular/core';
import { MailService } from '../../services/mail-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})


export class ContactPage {
  constructor (private http:MailService){
   

  }
    
  sendMail(mailData:any){
     return this.http.postMail(mailData).subscribe((map:any)=>{
      console.log(map);

     })
  }

}
