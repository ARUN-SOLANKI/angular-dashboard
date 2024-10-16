import { Component } from '@angular/core';
import { HomeFeatureComponent } from '../../common/feature/home-feature/home-feature.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeFeatureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
