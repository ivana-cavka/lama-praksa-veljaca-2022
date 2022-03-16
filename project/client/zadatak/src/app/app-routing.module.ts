import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialViewComponent } from './views/initial/initial-view/initial-view.component';
import { HomeComponent } from './views/home/home/home.component';
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { AtributiZadatakaComponent } from './components/atributi-zadataka/atributi-zadataka.component';
import { ZadatakViewComponent } from './views/zadatak/zadatak-view/zadatak-view.component';
import { PodatciComponent } from './components/navigation/subnavigation/podatci/podatci.component';
import { AtributiPismenaComponent } from './components/atributi-pismena/atributi-pismena/atributi-pismena.component';
import { PredmetViewComponent } from './views/predmet/predmet-view/predmet-view.component';
import { ZadatakEditComponent } from './views/zadatak/zadatak-edit/zadatak-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'atributi-predmeti', component: AtriputiPredmetaComponent },
  { path: 'init', component: InitialViewComponent},
  { path: 'atributi-zadataka', component: AtributiZadatakaComponent},
  { path: 'atributi-zadataka/one/:id', component: ZadatakViewComponent},
  { path: 'atributi-zadataka/new', component: ZadatakViewComponent },
  { path: 'atributi-pismena', component: AtributiPismenaComponent },
  { path: 'atributi-predmeta/one/:id', component: PredmetViewComponent},
  { path: 'atributi-predmeta/new', component: PredmetViewComponent },
  { path: 'atributi-zadataka/edit/:id', component: ZadatakEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
