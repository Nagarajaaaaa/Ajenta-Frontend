import { Component } from '@angular/core';
import { About } from '../about/about';
import { Quote } from '../quote/quote';
import { Services } from '../services/services';
import { Logos } from '../logos/logos';


@Component({
  selector: 'app-hero',
  imports: [About,Quote,Services,Logos],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
