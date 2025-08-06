import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Aquí puedes agregar propiedades y métodos que necesites para la lógica de tu componente  
  private title = 'Hello, Bienvenido Web v' + environment.app_version +'!';

  constructor() {
    // Inicialización del componente
  }

  // Método de ejemplo
  greet(): string {
    return this.title;
  }

}
