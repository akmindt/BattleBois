import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ShipComponent } from './ship/ship.component';
import { SquareService } from './services/square.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
