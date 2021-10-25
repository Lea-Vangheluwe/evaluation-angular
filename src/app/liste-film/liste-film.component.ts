import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.scss']
})
export class ListeFilmComponent implements OnInit {
  title: string = 'Liste des films';
  movies: Movie[] = [];
  movie: Movie = {
    id: 0,
    title: '',
    year: '',
    runtime: '',
    director: '',
    actors: '',
    plot: '',
    posterUrl: '',
    score: 0
  };
  // Gestion des alertes
  showAlert: boolean = false;
  typeAlert: string = '';
  textAlert: string = '';

  constructor(private moviesService: MoviesService) { }

  // Alerte d'augmentation du score
  showUpScore(movie: Movie){
    this.movie = movie;
    this.showAlert = true;
    this.typeAlert = 'success';
    this.textAlert = 'Vous avez augmenté le score de '
  }

  // Alerte de diminution du score
  showDownScore(movie: Movie){
    this.movie = movie;
    this.showAlert = true;
    this.typeAlert = 'warning';
    this.textAlert = 'Vous avez baissé le score de '
  }

  deleteMovieAlert(movie: Movie){
    this.movie = movie;
    this.movies = this.movies.filter(deletedMovie => deletedMovie.id != movie.id);
    this.showAlert = true;
    this.typeAlert = 'danger';
    this.textAlert = 'Vous avez supprimé '
  }

  ngOnInit(): void {
    this.moviesService.getMovie().subscribe(movies => this.movies = movies);
    console.log(this.movies)
  }

}
