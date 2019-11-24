import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './components/shared/navbars/navbars.component';
import { AlquilarComponent } from './components/alquilar/alquilar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FormComponent } from './components/form/form.component';
import { CuponesComponent } from './components/cupones/cupones.component';
import { NotaComponent } from './components/nota/nota.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BotonComponent } from './components/boton/boton.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    AlquilarComponent,
    PeliculasComponent,
    FormComponent,
    CuponesComponent,
    NotaComponent,
    PrecioComponent,
    ClienteComponent,
    HomeComponent,
    MoviesComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
