import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';

export const routes: Routes = [    
        {  path: '', component: HomeComponent }  
        , {  path: 'cv', component: CurriculumVitaeComponent }  
    ];
