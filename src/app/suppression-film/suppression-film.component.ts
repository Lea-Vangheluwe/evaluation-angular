import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-suppression-film',
  templateUrl: './suppression-film.component.html',
  styleUrls: ['./suppression-film.component.scss']
})
export class SuppressionFilmComponent implements OnInit {

  @Input() movie: Movie = {
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

  @Output() deleteMovieEvent = new EventEmitter<Movie>();

  constructor(private moviesService: MoviesService) { }

  deleteMovie(movie: Movie){
    this.moviesService.deleteMovie(this.movie).subscribe();
    this.deleteMovieEvent.emit(movie);
  }

  ngOnInit(): void {
  }

}
