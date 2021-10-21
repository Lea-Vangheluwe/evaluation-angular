import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  //Reception du film
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
  //Evenements
  @Output() upScoreEvent = new EventEmitter<Movie>();
  @Output() downScoreEvent = new EventEmitter<Movie>();

  constructor(private moviesService: MoviesService) { }

  // Méthode enlevant un point au film
  downScore(movie: Movie){
    this.movie.score = this.movie.score-1;
    this.moviesService.updateScore(movie).subscribe()
    this.downScoreEvent.emit(this.movie);
  }

  // Méthode ajoutant un point au film
  upScore(movie: Movie){
    this.movie.score = this.movie.score+1;
    this.moviesService.updateScore(movie).subscribe()
    this.upScoreEvent.emit(this.movie);
  }

  ngOnInit(): void {
  }

}
