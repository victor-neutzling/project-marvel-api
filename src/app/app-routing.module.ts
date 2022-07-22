import { GetSeriesComponent } from './home/get-series/get-series.component';
import { GetComicComponent } from './home/get-comic/get-comic.component';
import { GetCharactersBySeriesIdComponent } from './home/get-characters-by-series-id/get-characters-by-series-id.component';
import { GetCharacterComponent } from './home/get-character/get-character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'getchars',component:GetCharacterComponent},
 {path:'getcharsbyseriesid',component:GetCharactersBySeriesIdComponent},
 {path:'getcomics',component:GetComicComponent},
 {path:'getseries',component:GetSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
