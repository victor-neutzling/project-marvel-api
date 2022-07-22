import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCharactersBySeriesIdComponent } from './get-characters-by-series-id.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/card/card.module';



@NgModule({
  declarations: [
    GetCharactersBySeriesIdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[GetCharactersBySeriesIdComponent]
})
export class GetCharactersBySeriesIdModule { }
