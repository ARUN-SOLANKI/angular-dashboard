import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../../common/feature/login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginPage {}
