import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yutu-player',
  templateUrl: './yutu-player.component.html',
  styleUrls: ['./yutu-player.component.scss']
})
export class YutuPlayerComponent implements OnInit {

  @Input() videoId: string ="";
  private apiLoaded = false;
  
  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
