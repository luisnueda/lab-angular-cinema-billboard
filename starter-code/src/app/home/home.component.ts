import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Object ;

  constructor(private movieService: Movies, public router: Router) {
    this.movies = this.movieService.getMovies();
   }

  ngOnInit() {
  }

  viewDetails(id){
    this.router.navigate(['movie', id]);
  }
}
