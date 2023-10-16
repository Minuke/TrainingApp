import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NotFoundImage'
})
export class NotFoundImagePipe implements PipeTransform {

  transform(imageUrl: string | null): string {
    const dummyImageUrl = "/assets/images/not-found.png";

    if (!imageUrl || imageUrl.trim() === '') {
      return dummyImageUrl;
    }

    return imageUrl;
  }

}
