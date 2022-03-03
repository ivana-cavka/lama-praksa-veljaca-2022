import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table'; 
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,AtriputiPredmetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,TabViewModule,TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
