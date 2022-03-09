import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { TasksComponent } from './components/tasks/tasks/tasks.component';
import { HomeComponent } from './views/home/home/home.component';
import { SplitButtonComponent } from './components/split-button/split-button/split-button.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'atributi-predmeti', component: AtriputiPredmetaComponent },
  { path: 'vrste-zadataka', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
