import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AngularFireModule,AngularFirestoreModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  
  title = 'angular-primeng-auth';
}
