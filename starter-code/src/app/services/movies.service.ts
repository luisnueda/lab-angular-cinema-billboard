import { Injectable } from '@angular/core';
import { Movie } from '../movie.interface';
import { moviesSamples } from '../../sample-movies';

@Injectable()
export class Movies {

  movies: Array<Movie> = moviesSamples;

  constructor() { }

  getMovies() {
    return this.movies;
  }
  getMovie(id) {
    return this.movies[id];
  }

}
