import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mainhead',
  templateUrl: './mainhead.component.html'  
})
export class MainHeadComponent implements OnInit {

  titulo = environment.app_title;
  descripcion = environment.app_description;
  
  constructor(private route: Router) {
    //TODO validar rutas bases en header
    let path = this.route.url;
    this.titulo = this.titulo + " - " + path;
    console.log("MainHeadComponent - constructor : " + this.titulo + "-" + this.descripcion )
  }

  ngOnInit(): void {
    console.log("MainHeadComponent - ngOnInit")
  }
}
