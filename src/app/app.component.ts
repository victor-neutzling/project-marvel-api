import { CharacterService } from './character/character.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'marvel searchbar';
  @Input() isSigned = false;
  constructor(private authService: SocialAuthService){}
  ngOnInit(): void {

  }
  signIn(){

  }

}
