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

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovie().subscribe(movies => this.movies = movies);
    console.log(this.movies)
  }

}
