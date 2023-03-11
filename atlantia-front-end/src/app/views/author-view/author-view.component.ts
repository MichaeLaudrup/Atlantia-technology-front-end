import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerticalMenuItem } from 'ngx-shared-front-atlantia'; 
@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.scss']
})
export class AuthorViewComponent implements OnInit{
  
  menuOpened = false;
  menuData : VerticalMenuItem[] = [
    {
      name: 'Experiencia profesional',
      routerLink: 'professional-experience',
      imgUrl: 'assets/author-images/professional-experience.jpg'
    },
    {
      name: 'Cursos y certificados',
      routerLink: 'courses-and-certificates',
      imgUrl: 'assets/author-images/courses-certitifcations.jpg'
    },
    {
      name: '¿Hacia donde quiero ir?',
      routerLink: 'where-to-go',
      imgUrl: 'assets/author-images/where-to-go.jpg'
    },
    {
      name: 'Sobre mí',
      routerLink: 'me',
      imgUrl: 'assets/author-images/about-me.jpg'
    }
  ];

  currentIndexSelected = -1; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const firstRouteChild = this.router.url.substring(1).split('/')[1]; 
    
    if(!!firstRouteChild) return; 
    const selectedItemFromRoute = this.menuData.findIndex( (menuItem: VerticalMenuItem) => {
      return menuItem.routerLink === firstRouteChild; 
    });

    console.log(selectedItemFromRoute)
  }
}
