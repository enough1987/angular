import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesWrapperComponent } from './courses/components/courses-wrapper/courses-wrapper.component';


const routes: Routes = [
  { path: 'courses', component: CoursesWrapperComponent },
  { path: '**', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
