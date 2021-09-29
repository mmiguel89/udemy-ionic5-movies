import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { DetailComponent } from '../detail/detail.component';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3
  };

  constructor(private modalControler: ModalController) { }

  ngOnInit() { }

  async showDetail(id: string) {
    const detailModal = await this.modalControler.create({
      component: DetailComponent,
      componentProps: {
        id: id
      }
    });
    detailModal.present();
  }
}
