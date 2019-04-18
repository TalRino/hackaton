import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEggComponent } from './form-egg/form-egg.component';
import { IndexComponent } from './index/index.component';
import { FormcharacterComponent } from './formcharacter/formcharacter.component';

const routes: Routes = [

  { path: 'form-egg', component: FormEggComponent},
  { path: 'index', component: IndexComponent},
  { path: 'formcharacter', component: FormcharacterComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
