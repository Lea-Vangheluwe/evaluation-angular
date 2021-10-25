import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../shared/interfaces/movie';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-ajout-film',
  templateUrl: './ajout-film.component.html',
  styleUrls: ['./ajout-film.component.scss']
})
export class AjoutFilmComponent implements OnInit {
  ajoutFilmForm = new FormGroup ({
    title: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    runtime: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    actors: new FormControl('', Validators.required),
    plot: new FormControl('', Validators.required),
    posterUrl: new FormControl('', Validators.required)
  })
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

  //envoie de la validation de l'ajout
  @Output() addMovieEvent = new EventEmitter<Movie>();

  // Gestion des alertes
  showAlert: boolean = false;
  typeAlert: string = '';
  textAlert: string = '';

  constructor(private moviesService: MoviesService, private router: Router) { }

  addMovie(){
    if(this.ajoutFilmForm.valid){
    console.log(this.ajoutFilmForm.value);
    this.moviesService.addMovie(this.ajoutFilmForm.value).subscribe(result => {
      this.addMovieEvent.emit(this.movie);
      this.router.navigate(['/movies'])
  })
   }
   else{
    this.showAlert = true;
    this.textAlert = 'Merci de compléter tous les champs'
    this.typeAlert = 'danger'
   }
  }
  ngOnInit(): void {
  }

}
