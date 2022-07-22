import { HttpClientModule } from '@angular/common/http';
import { GetCharacterComponent } from './get-character.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/card/card.module';



@NgModule({
  declarations: [GetCharacterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[GetCharacterComponent]
})
export class GetCharacterModule { }
