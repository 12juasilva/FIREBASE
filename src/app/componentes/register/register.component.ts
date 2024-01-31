import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileUser } from '../../models/user';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,PasswordModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  value!: string;
  profileUser: ProfileUser = {
    id: ''
  };

  onSubmit() {
    // Lógica para manejar el envío del formulario, como enviar datos al servidor
    console.log('Formulario enviado:', this.profileUser);
  }
}
