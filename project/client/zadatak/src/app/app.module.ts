import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialViewComponent } from './views/initial/initial-view/initial-view.component';
import {InputTextModule} from 'primeng/inputtext';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table'; 
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { AtributiZadatakaComponent } from './components/atributi-zadataka/atributi-zadataka.component';
import { ZadatakViewComponent } from './views/zadatak/zadatak-view/zadatak-view.component';
import { PodatciComponent } from './components/navigation/subnavigation/podatci/podatci.component';
import { FilterComponent } from './components/navigation/subnavigation/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';
import { AtributiPismenaComponent } from './components/atributi-pismena/atributi-pismena/atributi-pismena.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InitialViewComponent,
    AtriputiPredmetaComponent,
    AtributiZadatakaComponent,
    ZadatakViewComponent,
    PodatciComponent,
    FilterComponent

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,AtriputiPredmetaComponent, AtributiPismenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,TableModule,
    HttpClientModule,
    MenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabMenuModule,
    FormsModule,TabViewModule,TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
