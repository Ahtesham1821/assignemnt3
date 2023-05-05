import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { SlipComponent } from './slip/slip.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  
  {
    path:'Update',
    component:UpdateComponent
  },
  {
    path:'Slip',
    component:SlipComponent
  }
  ,
  {
    path:'Update-form',
    component:UpdateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
