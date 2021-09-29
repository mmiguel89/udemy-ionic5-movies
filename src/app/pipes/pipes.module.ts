import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImagesUrlPipe } from './images-url.pipe';
import { ArrayPairPipe } from './array-pair.pipe';

@NgModule({
  declarations: [
    ArrayPairPipe,
    ImagesUrlPipe
  ],
  exports: [
    ArrayPairPipe,
    ImagesUrlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
