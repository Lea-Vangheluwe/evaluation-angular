import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getMovie(){
    return this.httpClient.get<Movie[]>(`${environment.serverUrl}/movies`)
  };

  updateScore(movie: Movie){
    return this.httpClient.put<Movie>(`${environment.serverUrl}/movies/${movie.id}`, movie, this.httpOptions)
  }

  addMovie(newMovie: Movie){
    this.movie =  {
      id: Date.now(),
      title: newMovie.title,
      year: newMovie.year,
      runtime: newMovie.runtime,
      director: newMovie.director,
      actors: newMovie.actors,
      plot: newMovie.plot,
      posterUrl: newMovie.posterUrl,
      score: 0
    };
    return this.httpClient.post<Movie>(`${environment.serverUrl}/movies`, this.movie, this.httpOptions)
  }

  deleteMovie(movie: Movie){
    console.log(movie.id);
    return this.httpClient.delete<Movie>(`${environment.serverUrl}/movies/${movie.id}`)
  }
}
