import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KioskoCafeteraPage } from './pages/KioskoCafeteraPage';
import { PageNotFound } from './pages/pageNotFound';
import { VasosPage } from './pages/vasos.page';
import { CafePage } from './pages/cafe.page';
import { AzucarPage } from './pages/azucar.page';
import { BienvenidaPage } from './pages/bienvenida.page';
import { GraciasPage } from './pages/gracias.page';

const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaPage},
  
  {path: '',  component: KioskoCafeteraPage, children: [
    {path: 'vasos', component: VasosPage},
    {path: 'cafe', component: CafePage},
    {path: 'azucar', component: AzucarPage},
    {path: '', redirectTo: 'vasos', pathMatch: 'full'}
  ]},
  
  {path: 'gracias', component: GraciasPage},
  {path: '', redirectTo: 'bienvenida', pathMatch: "full"},
  {path: '**', component: PageNotFound},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
