import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../services-logic/starwars.service.ts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit,OnDestroy {
  characters=[];
  activatedRoute:ActivatedRoute;
  swService:StarwarsService;
  loadedSide='all';

  subscription:Subscription

  constructor(activatedRoute:ActivatedRoute,swService:StarwarsService) {
    this.activatedRoute=activatedRoute;
    this.swService=swService;
   }

  ngOnInit() {

      this.activatedRoute.params.subscribe(
        (params)=>{
          console.log(params);
          this.characters = this.swService.getCharacters(params.side);
          this.loadedSide=params.side;
        }
      );

     this.subscription = this.swService.charactersChanged.subscribe(
        ()=>{
          this.characters = this.swService.getCharacters(this.loadedSide);
        }

      );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
