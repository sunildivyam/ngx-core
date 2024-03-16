import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from './services/utils.service';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';

@NgModule({
  declarations: [EnumToArrayPipe],
  providers: [UtilsService],
  imports: [CommonModule],
  exports: [EnumToArrayPipe],
})
export class UtilsModule {}
