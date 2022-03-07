import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { HomeComponent } from './views/home/home/home.component';
import { AtributiPismenaComponent } from './components/atributi-pismena/atributi-pismena/atributi-pismena.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'atributi-predmeti', component: AtriputiPredmetaComponent },
  { path: 'atributi-pismena', component: AtributiPismenaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
