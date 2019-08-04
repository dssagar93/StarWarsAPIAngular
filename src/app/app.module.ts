import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppComponent } from './app.component';

import { TabsComponent } from './tabs/tabs.component';
import { ListsComponent } from './lists/lists.component';
import { ItemComponent } from './item/item.component'
import { StarwarsService } from './services-logic/starwars.service.ts.service';
import { LoggingService } from './services-logic/logging.service.ts.service';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  
    TabsComponent,
    ListsComponent,
    ItemComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [StarwarsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
