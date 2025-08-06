import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Timelinecss } from './pages/testingsthings/timelinecss/timelinecss';
import { CurriculumVitae } from './pages/testingsthings/curriculum-vitae/curriculum-vitae';
import { ElRichardYutu } from './pages/testingsthings/el-richard-yutu/el-richard-yutu';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Test/TimeLine', component: Timelinecss },
  { path: 'Test/CV', component: CurriculumVitae },
  { path: 'Test/Yutu', component: ElRichardYutu },
  { path: '**', component: NotFoundComponent } // Ruta comodín al final  
];
