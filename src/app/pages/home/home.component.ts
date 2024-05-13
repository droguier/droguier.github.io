import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LIST_MENU_MAIN } from '../../dataobjects/home/menu_links';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = environment.app_title;
  appname = environment.app_name;
  version = environment.app_version;
	itemsNavegacion = LIST_MENU_MAIN.filter( x => x.visible == true);
}
