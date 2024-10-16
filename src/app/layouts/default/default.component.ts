import { Component } from '@angular/core';
import { SidebarComponent } from '../../common/component/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from '../../common/component/top-nav/top-nav.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopNavComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent {}
