import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSeriesComponent } from './get-series.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/card/card.module';



@NgModule({
  declarations: [
    GetSeriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    GetSeriesComponent
  ]
})
export class GetSeriesModule { }
