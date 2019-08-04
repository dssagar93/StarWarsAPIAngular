import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './services-logic/starwars.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  rootItems=['Apples','Bananas','Cherries'];

  swService:StarwarsService;
   
  constructor(swService:StarwarsService) {
    this.swService=swService;
   }

   ngOnInit(){
      this.swService.fetchCharactersAPI();
   }
}


