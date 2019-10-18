import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../models/IMovie';
import { FakeMovieServiceService } from '../services/fakeMovieService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
