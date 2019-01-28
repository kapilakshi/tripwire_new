import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { environment } from '../environments/environment';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    ButtonModule,
    RadioButtonModule
   
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.path}],
  bootstrap: [AppComponent]
})
export class AppModule { }
