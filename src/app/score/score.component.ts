import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
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

  constructor(private moviesService: MoviesService) { }

  downScore(movie: Movie){
    this.movie.score = this.movie.score-1;
    this.moviesService.updateScore(movie).subscribe()
  }

  upScore(movie: Movie){
    this.movie.score = this.movie.score+1;
    this.moviesService.updateScore(movie).subscribe()
  }

  ngOnInit(): void {
  }

}
