import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {AlquilarComponent} from './components/alquilar/alquilar.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'alquilar', component: AlquilarComponent},
  { path: '' , redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
