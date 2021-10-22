import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { ScoreComponent } from './score/score.component';
import { HomeComponent } from './home/home.component';
import { AjoutFilmComponent } from './ajout-film/ajout-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeFilmComponent,
    DetailFilmComponent,
    ScoreComponent,
    HomeComponent,
    AjoutFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
