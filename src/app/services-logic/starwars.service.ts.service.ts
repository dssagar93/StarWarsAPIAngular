import { LoggingService } from "./logging.service.ts.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {HttpClient} from '@angular/common/http'

import { map } from "rxjs/operators";
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Injectable()

export class StarwarsService {

  private logService:LoggingService
  charactersChanged=new Subject<void>();
  
  private httpClient:HttpClient;

  constructor(logService:LoggingService,httpClient:HttpClient){
    this.logService=logService;
    this.httpClient=httpClient;
  }
  private characters = [
    { name: 'Luke SkyWalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  fetchCharactersAPI(){
      this.httpClient.get('https://swapi.co/api/people/').subscribe((res)=>{
        
      var data=res["results"];
      console.log(data);
      const extractedChars=data;

      const chars=extractedChars.map((char,index)=>{
          console.log(index);
          return  {name:char.name,side:index%2==0?'light':'dark'}
      });

      console.log(chars);

      this.characters=chars;
      this.charactersChanged.next();
      
    });
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList
    })
  }

  onSideChosen(charInfo) {
    console.log(charInfo);
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    if(this.characters[pos].side==charInfo.side)
    {
      Swal.fire('The character is already on the '+ charInfo.side+' side');
    }
    else
    {
      this.characters[pos].side = charInfo.side;
      this.charactersChanged.next();
      Swal.fire('Moved to '+ charInfo.side+' side');
    }
  }

  addCharacter(name,side){
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
      if(pos!==-1)
      {
          return;
      }
      const newChar= {name:name,side:side};
      console.log(name);
      console.log(newChar);
      this.characters.push(newChar);
      Swal.fire('Added');

  }
}
