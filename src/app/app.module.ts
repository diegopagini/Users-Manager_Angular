import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { NavComponent } from './public/dashboard/nav/nav.component';
import { MainComponent } from './public/dashboard/main/main.component';
import { FooterComponent } from './public/footer/footer.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { HomeComponent } from './public/home/home.component';
import { UserInfoComponent } from './public/user-info/user-info.component';
import { ListComponent } from './public/dashboard/list/list.component';
import { ItemListComponent } from './public/dashboard/components/item-list/item-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    UserInfoComponent,
    ListComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
