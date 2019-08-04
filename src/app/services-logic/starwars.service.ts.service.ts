import { LoggingService } from "./logging.service.ts.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {HttpClient} from '@angular/common/http'

import { map } from "rxjs/operators";

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

      const chars=extractedChars.map((char)=>{

          return  {name:char.name,side:''}
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
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLogToConsole("Input side changed of "+charInfo.name+" to :"+ charInfo.side);
    
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
  }
}
