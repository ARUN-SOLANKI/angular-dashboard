import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from '../../pages/login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, LoginPage],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
