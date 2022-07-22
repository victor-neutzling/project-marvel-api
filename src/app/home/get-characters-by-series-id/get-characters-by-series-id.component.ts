import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from 'src/app/character/character.service';

@Component({
  selector: 'app-get-characters-by-series-id',
  templateUrl: './get-characters-by-series-id.component.html',
  styleUrls: ['./get-characters-by-series-id.component.scss']
})
export class GetCharactersBySeriesIdComponent  {

  charName = new FormControl();
  @Input() pageOffset:number = 1;
  public nextHeroes:any;
  heroes:any;

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
    this.cs.getCharactersBySeriesId(this.charName.value,this.pageOffset).subscribe((res)=>{
      this.heroes = res;
    })
    this.cs.getCharactersBySeriesId(this.charName.value,this.pageOffset+20).subscribe((res)=>{
      if(res.length){
        this.nextHeroes = res;
      }else{
        this.nextHeroes = null
      }
    })
  }
}
