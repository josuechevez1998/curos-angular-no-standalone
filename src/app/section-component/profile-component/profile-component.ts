import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  standalone: false,
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css'
})


export class ProfileComponent {

  public fullName: String = 'Josue Chevez';

  public description: String = `¡Bienvenido a mi universo digital! soy desarrollador con una pasión inagotable por la tecnología y la programación. Con una trayectoria marcada por la innovación en el desarrollo de software web, gestión de bases de datos SQL, DevOps y administración de servidores, he colaborado con diversas empresas, perfeccionando mis habilidades y ampliando mis horizontes tecnológicos.
  `;

  public address: String = 'El Salvador, San Salvador';

  public photoProfile: String = '/assets/logo-edutech.jpeg'
}
