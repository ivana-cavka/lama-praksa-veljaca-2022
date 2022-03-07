import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialViewComponent } from './views/initial/initial-view/initial-view.component';
/* const routes: Routes = [
  {
    path: '', component: InitialViewComponent
  }, */
/* import { HomeComponent } from './views/home/home/home.component'; */

/* const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/init', component: InitialViewComponent },
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component'; */
import { HomeComponent } from './views/home/home/home.component';
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { AtributiZadatakaComponent } from './components/atributi-zadataka/atributi-zadataka.component';
import { ZadatakViewComponent } from './views/zadatak/zadatak-view/zadatak-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'atributi-predmeti', component: AtriputiPredmetaComponent },
  { path: 'init', component: InitialViewComponent},
  { path: 'atributi-zadataka', component: AtributiZadatakaComponent},
  { path: 'atributi-zadataka/one/:id', component: ZadatakViewComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
