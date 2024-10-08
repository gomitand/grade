import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './components/grade/grade.component';

const routes: Routes = [

  {
    path:'Picaflor/todos_paises/Management/EditGrades', component:GradesComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
