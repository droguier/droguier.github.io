import { Component  } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';

//import { GugolAnalyComponent } from './components/media/gugol-analy/gugol-analy.component'
import { FooterComponent } from './components/footers/footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet
          //, GugolAnalyComponent
          , FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  title = environment.app_title;
  appname = environment.app_name;
  version = environment.app_version;
  
}
