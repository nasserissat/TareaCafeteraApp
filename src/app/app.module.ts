import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KioskoCafeteraPage } from './pages/KioskoCafeteraPage';
import { VasosPage } from './pages/vasos.page';
import { CafePage } from './pages/cafe.page';
import { AzucarPage } from './pages/azucar.page';
import { GraciasPage } from './pages/gracias.page';
import { PageNotFound } from './pages/pageNotFound';
import { BienvenidaPage } from './pages/bienvenida.page';

@NgModule({
  declarations: [
    AppComponent,
    KioskoCafeteraPage,
    VasosPage, 
    CafePage,
    AzucarPage,
    GraciasPage,
    PageNotFound,
    BienvenidaPage,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
