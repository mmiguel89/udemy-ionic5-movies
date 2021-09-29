import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  movies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private noviesService: MoviesService) { }

  ngOnInit() {
    this.discover();
    this.discoverPopular();
  }

  discover() {
    this.noviesService.discover().subscribe(response => {
      this.movies = response.results;
    });
  }

  discoverPopular() {
    this.noviesService.discoverPopular().subscribe(response => {
      const popularMoviesTmp = [...this.popularMovies, ...response.results]
      this.popularMovies = popularMoviesTmp;
    });
  }
}
