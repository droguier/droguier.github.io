import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule}  from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
//
import { DROGUIER_CV } from '../../dataobjects/curriculum-vitae/cv-personal'

@Component({
  selector: 'app-curriculum-vitae',
  standalone: true,
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [ MatCardModule
      , MatDatepickerModule
      , MatInputModule
      , MatFormFieldModule
      //, FormGroup
      , MatIconModule
      , FormsModule
      , ReactiveFormsModule
    ]
})
export class CurriculumVitaeComponent {
  datos_curriculum = DROGUIER_CV;
}
