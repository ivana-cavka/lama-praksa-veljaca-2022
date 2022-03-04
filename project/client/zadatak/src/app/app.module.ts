import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component'; 
/* import { InitialViewComponent } from './views/initial/initial-view/initial-view.component'; */
import {InputTextModule} from 'primeng/inputtext';
/* @NgModule({
  declarations: [
    AppComponent,
    InitialViewComponent */

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
