import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'atributi-predmeti', component: AtriputiPredmetaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
