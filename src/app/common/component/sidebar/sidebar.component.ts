import { Component } from '@angular/core';
import { sideMenu, SideMenuOptions } from '../../../constant/sideMenu';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems: SideMenuOptions[] = sideMenu;
  activeRouteId: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRouteId = event.urlAfterRedirects.split('/')[1]; // Get active route ID from URL
      }
    });
  }
}
