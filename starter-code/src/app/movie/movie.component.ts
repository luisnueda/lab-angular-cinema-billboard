import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movies } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieDetail: Object;
  constructor(private movieService: Movies, public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.movieDetail = this.movieService.getMovie(Number(params['id']));
    });
  }
  goHome() {
    this.router.navigate(['home']);
  }
}
