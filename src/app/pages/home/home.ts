import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Benefits } from '../../components/benefits/benefits';
import { Services } from '../../components/services/services';
import { Process } from '../../components/process/process';
import { Gallery } from '../../components/gallery/gallery';
import { About } from '../../components/about/about';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Faq } from '../../components/faq/faq';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Benefits,
    Services,
    Process,
    Gallery,
    About,
    Testimonials,
    Faq,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
