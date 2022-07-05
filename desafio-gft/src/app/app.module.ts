import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdicionaColaboradorComponent } from './home-page/adiciona-colaborador/adiciona-colaborador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePageComponent,
    AdicionaColaboradorComponent,
    BarraLateralComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
