import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdicionaColaboradorComponent } from './home-page/adiciona-colaborador/adiciona-colaborador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { BarraInferiorComponent } from './components/barra-inferior/barra-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePageComponent,
    AdicionaColaboradorComponent,
    BarraLateralComponent,
    ProgressBarComponent,
    BarraSuperiorComponent,
    BarraInferiorComponent,
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
