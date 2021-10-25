import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutFilmComponent } from './ajout-film/ajout-film.component';
import { HomeComponent } from './home/home.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: ListeFilmComponent},
  {path: 'addMovie', component: AjoutFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
