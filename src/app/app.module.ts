import { HomeModule } from './home/home.module';
import { CardModule } from './card/card.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GetCharacterComponent } from './home/get-character/get-character.component';
import { GetCharactersBySeriesIdComponent } from './home/get-characters-by-series-id/get-characters-by-series-id.component';
import { GetComicComponent } from './home/get-comic/get-comic.component';
import { GetSeriesComponent } from './home/get-series/get-series.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,

} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot([
      {path:'getchars',component:GetCharacterComponent},
      {path:'getcharsbyseriesid',component:GetCharactersBySeriesIdComponent},
      {path:'getcomics',component:GetComicComponent},
      {path:'getseries',component:GetSeriesComponent}
  ]),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
