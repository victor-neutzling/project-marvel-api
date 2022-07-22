import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { delay } from 'rxjs';
import { CharacterService } from 'src/app/character/character.service';

@Component({
  selector: 'app-get-character',
  templateUrl: './get-character.component.html',
  styleUrls: ['./get-character.component.scss']
})
export class GetCharacterComponent {

  charName = new FormControl();
  public heroes:any;
  public nextHeroes:any;
  @Input() pageOffset:number = 1;

  constructor(private cs:CharacterService){

  }
  nextPage(){
    if(this.nextHeroes.length)
    this.pageOffset += 20

    console.log(this.pageOffset)
    this.getHeroes()
  }
  previousPage(){
    if(this.pageOffset >= 20){
      this.pageOffset -= 20
    }
    console.log(this.pageOffset)
    this.getHeroes()

  }

  getHeroes(){
    this.cs.getCharacters(this.charName.value,this.pageOffset).subscribe((res)=>{
      this.heroes = res;
    })
    this.cs.getCharacters(this.charName.value,this.pageOffset+20).subscribe((res)=>{
      if(res.length){
        this.nextHeroes = res;
      }else{
        this.nextHeroes = null
      }
    })
  }
}
