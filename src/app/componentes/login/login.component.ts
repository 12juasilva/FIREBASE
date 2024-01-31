import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,PasswordModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  value!: string;
  user: any = {}; // Asumiendo que 'user' es un objeto con propiedades username y password

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para manejar el envío del formulario, como enviar datos al servidor
    console.log('Formulario enviado:', this.user);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
