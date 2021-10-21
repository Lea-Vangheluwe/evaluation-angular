import { Component, Input, OnInit } from '@angular/core';
import { unchangedTextChangeRange } from 'typescript';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
