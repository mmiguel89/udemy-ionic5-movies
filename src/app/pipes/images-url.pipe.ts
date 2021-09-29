import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../environments/environment';

const IMAGES_URL = environment.imagesUrl;

@Pipe({
  name: 'imagesUrl'
})
export class ImagesUrlPipe implements PipeTransform {

  transform(image: string, defaultUrl: string = "./assets/no-image-banner.jpg", size: string = "w500"): string {
    if (!image) return defaultUrl;
    return `${IMAGES_URL}/${size}${image}`;
  }
}
