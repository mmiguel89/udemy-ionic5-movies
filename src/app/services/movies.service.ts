import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { CreditsResponse, MovieDetailResponse, MovieResponse } from '../interfaces/interfaces';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // popular
  private popularPage = 0;
  // Search
  private actualFilter = "";
  private searchPage = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = API_URL + query;
    return this.http.get<T>(`${query}&api_key=${API_KEY}`);
  }

  // Discover
  discover() {
    return this.executeQuery<MovieResponse>("discover/movie?primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-09-30");
  }

  discoverPopular() {
    this.popularPage++;
    return this.executeQuery<MovieResponse>(`discover/movie?primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-09-30&page=${this.popularPage}&sort_by=popularity desc`);
  }

  // Search
  search(filter: string) {
    if (this.actualFilter === filter) {
      this.searchPage++;
    } else {
      this.searchPage = 1;
      this.actualFilter = filter;
    }
    return this.executeQuery<MovieResponse>(`search/movie?query=${filter}&page=${this.searchPage}`);
  }

  // Getters
  getDetail(id: string) {
    return this.executeQuery<MovieDetailResponse>(`movie/${id}?a=1`);
  }

  getCredits(id: string) {
    return this.executeQuery<CreditsResponse>(`movie/${id}/credits?a=1`);
  }
}
