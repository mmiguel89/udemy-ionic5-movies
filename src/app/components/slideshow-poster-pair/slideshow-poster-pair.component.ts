import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { DetailComponent } from '../detail/detail.component';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster-pair',
  templateUrl: './slideshow-poster-pair.component.html',
  styleUrls: ['./slideshow-poster-pair.component.scss'],
})
export class SlideshowPosterPairComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Output() moreEvent = new EventEmitter();

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3
  }; 

  constructor(private modalControler: ModalController) { }

  ngOnInit() {}

  more() {
    this.moreEvent.emit();
  }

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
