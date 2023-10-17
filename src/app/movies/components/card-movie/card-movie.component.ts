import { Component, Input } from "@angular/core";
import { Movie } from "src/app/interfaces/movie.interface";
import { MoviesService } from "src/app/services/movies.service";
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
  providers: [MessageService]

})
export class CardMovieComponent {

  @Input() public movie:Movie;

  public visible:boolean = false;

  constructor(private moviesService:MoviesService, private messageService:MessageService) {
    this.movie = {
      id: 0,
      title: '',
      poster: null,
      genre: [],
      year: 0,
      duration: 0,
      imdbRating: 0,
      actors: []
    };
  }

  deleteMovie(movieId:number):void {
    this.moviesService.deleteMovie(movieId).subscribe(
      () => {
        this.showSuccessToast('La película se ha eliminado con éxito.');
        this.closeDialog();
      });
  }

  showDialog():void {
    this.visible = true;
  }

  closeDialog():void {
    this.visible = false;
  }

  showSuccessToast(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: message });
  }

}
