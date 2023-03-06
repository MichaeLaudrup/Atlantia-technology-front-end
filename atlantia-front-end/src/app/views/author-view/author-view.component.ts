import { Component } from '@angular/core';
import { VerticalMenuItem, linkStatus } from 'ngx-shared-front-atlantia'; 
@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.scss']
})
export class AuthorViewComponent {
  menuOpened = false;
  LinkStatus = linkStatus; 
  menuData : VerticalMenuItem[] = [
    {
      name: 'Experiencia profesional',
      routerLink: 'professional-experience',
      status: linkStatus.FREE,
      imgUrl: 'assets/author-images/professional-experience.jpg'
    },
    {
      name: 'Cursos y certificados',
      status: linkStatus.FREE,
      routerLink: 'courses-and-certificates',
      imgUrl: 'assets/author-images/courses-certitifcations.jpg'
    },
    {
      name: '¿Hacia donde quiero ir?',
      status: linkStatus.FREE,
      routerLink: 'where-to-go',
      imgUrl: 'assets/author-images/where-to-go.jpg'
      
    },
    {
      name: 'Sobre mí',
      status: linkStatus.FREE,
      routerLink: 'me',
      imgUrl: 'assets/author-images/about-me.jpg'
    }
  ];
}
