import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComicComponent } from './get-comic.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/card/card.module';



@NgModule({
  declarations: [
    GetComicComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    GetComicComponent
  ]
})
export class GetComicModule { }
