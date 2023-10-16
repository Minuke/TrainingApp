import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundImagePipe } from './not-found-image.pipe';
import { DurationPipe } from './duration.pipe';


@NgModule({
  declarations: [NotFoundImagePipe, DurationPipe],
  exports: [NotFoundImagePipe, DurationPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
