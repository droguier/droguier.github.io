import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { DROGUIER_CV } from './cv-personal';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-curriculum-vitae',
  providers: [provideNativeDateAdapter()],
  imports: [ MatCardModule
      , MatDatepickerModule
      , MatInputModule
      , MatFormFieldModule      
      , MatIconModule
      , FormsModule
      , ReactiveFormsModule
    ],
  templateUrl: './curriculum-vitae.html',
  styleUrl: './curriculum-vitae.css'
})
export class CurriculumVitae implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  datos_curriculum = DROGUIER_CV;
  ngOnInit() {
      console.log("[CurriculumVitaeComponent] ngOnInit : " + formatDate(Date.now(), environment.formatDateFull, environment.lenguajeFormat) );
  }

  
  private isMiddleMouseDown = false;
  private startX = 0;
  private scrollLeft = 0;

  onMouseDown(event: MouseEvent) {
    if (event.button === 1) {
      this.isMiddleMouseDown = true;
      this.startX = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
      this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
      event.preventDefault();
    }
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMiddleMouseDown) return;
    const x = event.pageX - this.scrollContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1; // Ajusta la velocidad si quieres
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(event: MouseEvent) {
    if (event.button === 1) {
      this.isMiddleMouseDown = false;
    }
  }
}

console.log("[CurriculumVitaeComponent] Ts");