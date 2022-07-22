import { GetSeriesModule } from './get-series/get-series.module';
import { GetComicModule } from './get-comic/get-comic.module';
import { GetCharactersBySeriesIdModule } from './get-characters-by-series-id/get-characters-by-series-id.module';
import { GetCharacterModule } from './get-character/get-character.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetCharacterComponent } from './get-character/get-character.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GetCharacterModule,
    GetCharactersBySeriesIdModule,
    GetComicModule,
    GetSeriesModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
