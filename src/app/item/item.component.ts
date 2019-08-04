import { Component, OnInit, Input, Output} from '@angular/core';
import { StarwarsService } from '../services-logic/starwars.service.ts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;

  swService:StarwarsService;
  constructor(swService:StarwarsService) {
    this.swService=swService;
   }

  ngOnInit() {
  }
  onAssign(side){
    // this.sideAssigned.emit({name:this.character.name,side:side});
    this.swService.onSideChosen({name:this.character.name,side:side});
  }
}
