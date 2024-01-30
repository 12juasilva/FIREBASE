import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: any = {}; // Asumiendo que 'user' es un objeto con propiedades username, email, y password

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para manejar el envío del formulario, como enviar datos al servidor
    console.log('Formulario enviado:', this.user);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }



}
