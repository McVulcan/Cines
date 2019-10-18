import { Component, OnInit } from '@angular/core';
import { FakeMovieServiceService } from './services/fakeMovieService.service';
import { IMovie } from './models/IMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  moviesArray: IMovie[];
  moviesToShow: IMovie[];

  constructor(private movieService: FakeMovieServiceService) {}

  ngOnInit(): void {
    this.moviesToShow = this.moviesArray = this.movieService.getMovies();
  }

  onSearch(event: any) {
    const searchvalue = event.target.value;

    this.moviesToShow = searchvalue
      ? this.moviesArray.filter(
          movie => movie.title.toLowerCase() === searchvalue.toLowerCase()
        )
      : this.moviesArray;
  }
}
