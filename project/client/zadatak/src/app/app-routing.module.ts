import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialViewComponent } from './views/initial/initial-view/initial-view.component';
const routes: Routes = [
  {
    path: '', component: InitialViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
