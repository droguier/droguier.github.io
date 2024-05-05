import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterOutlet } from '@angular/router';
//import { MainHeadComponent } from './components/mainhead/mainhead.component'
import packageJson from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 
  title = environment.app_title;
  appname = environment.app_name;
  version = environment.app_version;
  
  ngOnInit(): void {
    console.log("AppComponent - ngOnInit")
  }
}
