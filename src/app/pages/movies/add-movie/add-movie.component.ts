import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from '../../../services/movies.service';
import { Actor } from 'src/app/interfaces/actor.interface';
import { Company } from 'src/app/interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit{

  public movies:Movie[] = [];
  public nextId:number = 0;
  public allGenres: string[] = [];
  public actors:Actor[] = [];
  public companies:Company[] = [];

  public myForm:FormGroup = this.fb.group({
    id: [this.nextId],
    title: ['', [ Validators.required]],
    poster: [null],
    genres: [null, [this.atLeastOneCategorySelectedValidator]],
    actors: [null, [this.atLeastOneCategorySelectedValidator]],
    companies: [null, [this.atLeastOneCategorySelectedValidator]],
    year: [null, [Validators.required, Validators.min(0)]],
    duration: [null, [Validators.required, Validators.min(0)]],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
  })

  constructor(private fb: FormBuilder, private moviesService:MoviesService,  private router: Router){}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies:Movie[]) => {
      this.movies = movies;
      this.nextId = this.getNextMovieId();
      this.myForm.patchValue({ id: this.nextId });
      this.allGenres = this.getAllUniqueGenres();
    });
    this.moviesService.getActors().subscribe((actors:Actor[]) => {
      this.actors = actors;
    });
    this.moviesService.getCompanies().subscribe((companies:Company[]) => {
      this.companies = companies;
    })
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

  getNextMovieId(): number {
    const maxId = Math.max(...this.movies.map(movie => movie.id), 0);
    return maxId + 1;
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
    const newMovieData = this.myForm.value;
    this.moviesService.addMovie(newMovieData).subscribe((result) => {
      if (result) {
        this.router.navigate(['/movies', this.myForm.value.id]);
      }
    });
  }
}
