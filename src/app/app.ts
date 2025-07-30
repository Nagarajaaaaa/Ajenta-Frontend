import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { ContactButton } from './components/contact-button/contact-button';
import { Navbar } from './components/navbar/navbar';
import { Logos } from './components/logos/logos';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { Quote } from './components/quote/quote';
import { Services } from './components/services/services';
import { ContactPage } from './components/contact-page/contact-page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet, Navbar, Hero, ContactButton, Logos, About, Footer,Quote,Services,ContactPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ajenta');
}
