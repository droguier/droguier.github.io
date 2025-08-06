import { Component } from '@angular/core';
import { YutuPlayerComponent } from '../../../webcomponents/media/yutu-player/yutu-player.component';

@Component({
  selector: 'app-el-richard-yutu',
  imports: [ YutuPlayerComponent ],
  templateUrl: './el-richard-yutu.html',
  styleUrl: './el-richard-yutu.css'
})
export class ElRichardYutu {
  post_title = "Video: El universo en una copa de vino, por Richard Feynman";
  post_src_imgheader = "";
  youtubeID: string = "ucXEmM7NqrI";
}
