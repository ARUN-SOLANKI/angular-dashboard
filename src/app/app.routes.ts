import { Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageMemberComponent } from './pages/manage-member/manage-member.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginPage } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'manage-member', component: ManageMemberComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
  {
    path: 'login',
    component: AuthComponent,
    children: [
      { path: '', component: LoginPage },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
