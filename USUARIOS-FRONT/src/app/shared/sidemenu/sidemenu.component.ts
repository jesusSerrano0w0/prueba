import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export default class SidemenuComponent {
  public menuItems=  routes
  .map(route=>route.children ?? [])
  .flat()
  .filter(route=>route && route.path);


  constructor(){

  
  }
}
