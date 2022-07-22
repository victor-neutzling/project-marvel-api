import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from 'src/app/character/character.service';

@Component({
  selector: 'app-get-comic',
  templateUrl: './get-comic.component.html',
  styleUrls: ['./get-comic.component.scss']
})
export class GetComicComponent  {

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
    this.cs.getComic(this.charName.value,this.pageOffset).subscribe((res)=>{
      this.heroes = res;
    })
    this.cs.getComic(this.charName.value,this.pageOffset+20).subscribe((res)=>{
      if(res.length){
        this.nextHeroes = res;
      }else{
        this.nextHeroes = null
      }
    })

  }
}
