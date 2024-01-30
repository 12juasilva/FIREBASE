import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const routes:  Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión por defecto
    { path: '**', redirectTo: '/login' } // Maneja rutas no encontradas redirigiendo a la página de inicio de sesión
  ];
  export class AppRoutingModule { }