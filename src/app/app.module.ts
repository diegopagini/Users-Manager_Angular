import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { NavComponent } from './public/dashboard/nav/nav.component';
import { MainComponent } from './public/dashboard/main/main.component';
import { FooterComponent } from './public/dashboard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
