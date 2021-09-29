import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { DetailComponent } from '../detail/detail.component';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slidesOptions = {
    freeMode: true,
    slidesPerView: 1.3
  };  

  constructor(private modalControler: ModalController) { }

  ngOnInit() {}

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
