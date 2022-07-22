import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id = ''
  @Input() name = ''
  @Input() description = ''
  @Input() src = ''
  constructor() { }

  ngOnInit(): void {
  }

}
