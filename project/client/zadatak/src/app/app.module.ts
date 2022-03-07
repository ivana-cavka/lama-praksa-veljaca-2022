import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table'; 
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { AtributiPismenaComponent } from './components/atributi-pismena/atributi-pismena/atributi-pismena.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,AtriputiPredmetaComponent, AtributiPismenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,TabViewModule,TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
