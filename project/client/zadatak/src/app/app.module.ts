import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table'; 
import { AtriputiPredmetaComponent } from './components/atriputi-predmeta/atriputi-predmeta.component';
import { TasksComponent } from './components/tasks/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import {SplitButtonModule} from 'primeng/splitbutton';
import { SplitButtonComponent } from './components/split-button/split-button/split-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,AtriputiPredmetaComponent, TasksComponent, SplitButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,TabViewModule,TableModule,HttpClientModule,SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
