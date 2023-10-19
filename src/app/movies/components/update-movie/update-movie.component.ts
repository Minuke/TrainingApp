import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/interfaces/movie.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/interfaces/actor.interface';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  public movieId!: number;
  public movie!:Movie;
  public movies:Movie[] = [];
  public allGenres: string[] = [];
  public actors:Actor[] = [];
  public idMovie:number = 0;


  public myForm:FormGroup = this.fb.group({
    id: [this.idMovie],
    title: ['', [ Validators.required]],
    poster: [null],
    genres: [null, [this.atLeastOneCategorySelectedValidator]],
    actors: [null, [this.atLeastOneCategorySelectedValidator]],
    year: [null, [Validators.required, Validators.min(0)]],
    duration: [null, [Validators.required, Validators.min(0)]],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(10)]],

  })

  constructor(private route: ActivatedRoute, private moviesService:MoviesService, private fb: FormBuilder,  private router: Router) {}

  ngOnInit() {
    this.moviesService.getActors().subscribe((actors:Actor[]) => {
      this.actors = actors;
    });



    this.route.params.subscribe((params) => {
      this.movieId = +params['id'];
      this.moviesService.getMovieById(this.movieId).subscribe((movie:Movie) => {
        this.movie = movie;
        this.idMovie = movie.id;

        this.myForm.patchValue({
          id: this.movie.id,
          title: this.movie.title,
          poster: this.movie.poster,
          genres: this.movie.genres,
          actors: this.movie.actors,
          year: this.movie.year,
          duration: this.movie.duration,
          rating: this.movie.rating
        });
        this.moviesService.getMovies().subscribe((data) => {
          this.movies = data;
          this.allGenres = this.getAllUniqueGenres();
        })

      });
    });
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError(field: string ): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';
        case 'min':
          return `Tiene que ser un valor positivo`;
        case 'max':
            return `Tiene que ser un valor entre 0 y 10`;
        case 'atLeastOneCategoryRequired':
            return 'Al menos una categoría debe ser seleccionada';
      }
    }
    return null;
  }

  getAllUniqueGenres(): string[] {
    const uniqueGenres = new Set<string>();
    this.movies.forEach((movie: Movie) => {
      movie.genres.forEach((genre: string) => {
        uniqueGenres.add(genre);
      });
    });
    return Array.from(uniqueGenres);
  }

  atLeastOneCategorySelectedValidator(control:AbstractControl): { [key: string]: boolean } | null {
    const selectedCategories = control.value;
    if (!selectedCategories || selectedCategories.length === 0) {
      return { atLeastOneCategoryRequired: true };
    }
    return null;
  }

  onSave():void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const updateMovieData = this.myForm.value;
    this.moviesService.updateMovie(updateMovieData.id, updateMovieData).subscribe((result) => {
      if (result) {
        this.router.navigate(['/movies', this.myForm.value.id]);
      }
    });
  }

}
