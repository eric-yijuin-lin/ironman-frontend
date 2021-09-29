import { IronmanFormAddComponent } from './ironman-form-add/ironman-form-add.component';
import { IronmanListComponent } from './ironman-list/ironman-list.component';
import { IronmanComponent } from './ironman/ironman.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IronmanFormAddComponent },
  { path: 'ironman/:id', component: IronmanComponent },
  { path: 'ironman-list', component: IronmanListComponent },
  { path: 'ironman-add', component: IronmanFormAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
