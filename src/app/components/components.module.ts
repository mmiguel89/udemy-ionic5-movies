import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DetailComponent } from './detail/detail.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPosterPairComponent } from './slideshow-poster-pair/slideshow-poster-pair.component';
import { SlideshowTitleComponent } from './slideshow-title/slideshow-title.component';

@NgModule({
  declarations: [
    DetailComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPosterPairComponent,
    SlideshowTitleComponent
  ],
  exports: [
    DetailComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPosterPairComponent,
    SlideshowTitleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
