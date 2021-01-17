import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { FormComponent } from 'app/form/form.component';
import { InfoComponent } from 'app/info/info.component';

const routes: Routes = [
  {path: 'first-component', component: FormComponent},
  {path: 'second-component', component: InfoComponent}

]

@NgModule({
  imports:  [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
