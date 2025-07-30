import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { ContactButton } from './components/contact-button/contact-button';
import { ContactPage } from './components/contact-page/contact-page';
import { About } from './components/about/about';
import { Quote } from './components/quote/quote';
import { Logos } from './components/logos/logos';
import { AboutCompany } from './components/about-company/about-company';
import { WebsiteDevelopment } from './components/website-development/website-development';
import { DigitalMarketing } from './components/digital-marketing/digital-marketing';
import { Services } from './components/services/services';

export const routes: Routes = [
  { path: 'hero', component: Hero },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'quote', component: Quote },
  { path: 'logos', component: Logos },
  { path: 'about_page', component: AboutCompany },
  { path: 'contact_page', component: ContactPage },
  { path: 'about_website_development', component: WebsiteDevelopment },
  { path: 'about_digital_markating', component: DigitalMarketing },
  
  { path: '', redirectTo: 'hero', pathMatch: 'full' }
];
