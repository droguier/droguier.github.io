import { environment } from '../environments/environment';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './webcomponents/footers/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

console.log("Ruta principal : " + environment.SERVER_URL);
