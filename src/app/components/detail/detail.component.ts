import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Cast, MovieDetailResponse } from '../../interfaces/interfaces';
import { DataLocalService } from '../../services/data-local.service';
import { MoviesService } from '../../services/movies.service';

const OVERVIEW_MIN = 150;
const OVERVIEW_MAX = 5000;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id: string;

  detail: MovieDetailResponse;
  cast: Cast[] = [];

  overviewMin = OVERVIEW_MIN;
  overviewSize = OVERVIEW_MIN;

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3,
    spaceBetween: 5,
  };  

  constructor(
    public dataLocalService: DataLocalService,
    private modalController: ModalController,
    private noviesService: MoviesService) { }

  ngOnInit() {
    this.noviesService.getDetail(this.id).subscribe(response => {
      this.detail = response;
    });
    this.noviesService.getCredits(this.id).subscribe(response => {
      this.cast = response.cast;
    });
  }

  more() {
    this.overviewSize = OVERVIEW_MAX;
  }

  back() {
    this.modalController.dismiss();
  }
}
