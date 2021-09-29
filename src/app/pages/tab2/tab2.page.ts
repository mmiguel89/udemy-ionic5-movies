import { Component, ViewChild } from '@angular/core';

import { IonInfiniteScroll, ModalController } from '@ionic/angular';

import { DetailComponent } from '../../components/detail/detail.component';
import { Movie } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filter: string = "";
  movies: Movie[] = [];
  page = 0;
  searching = false;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private modalController: ModalController,
    private moviesService: MoviesService) { }

  search(event) {
    this.searching = true;
    this.filter = event.detail.value;
    this.infiniteScroll.disabled = false;
    if(this.filter.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }
    this.moviesService.search(this.filter)
      .subscribe(response => {
        this.movies = response.results;
        this.searching = false;
      });
  }

  paginate(event) {
    this.moviesService.search(this.filter)
      .subscribe(
        response => {
          if (response.results.length === 0) {
            this.infiniteScroll.disabled = true;
            this.infiniteScroll.complete();
            return;
          }
          const moviesTmp = [...this.movies, ...response.results];
          this.movies = moviesTmp;
          this.infiniteScroll.complete();
        },
        error => {
          console.log(JSON.stringify(error));
        });
  }

  async showDetail(id: string) {
    const detailModal = await this.modalController.create({
      component: DetailComponent,
      componentProps: {
        id: id
      }
    });
    detailModal.present();
  }
}
