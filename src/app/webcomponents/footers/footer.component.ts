import { Component } from '@angular/core';
import { formatDate } from "@angular/common";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html' ,
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  site_time = new Date().getTime();
  format = 'yyyy';
  locale = 'en-US';
  site_name = environment.app_name;
  site_footer_descrip = environment.app_footer_description;
  formattedDate = formatDate(this.site_time, this.format, this.locale);
  
}