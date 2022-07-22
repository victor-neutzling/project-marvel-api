import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharacterService } from 'src/app/character/character.service';

@Component({
  selector: 'app-get-series',
  templateUrl: './get-series.component.html',
  styleUrls: ['./get-series.component.scss']
})
export class GetSeriesComponent  {

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
    this.cs.getSeries(this.charName.value,this.pageOffset).subscribe((res)=>{
      this.heroes = res;
    })
    this.cs.getSeries(this.charName.value,this.pageOffset+20).subscribe((res)=>{
      if(res.length){
        this.nextHeroes = res;
      }else{
        this.nextHeroes = null
      }
    })
  }
}
