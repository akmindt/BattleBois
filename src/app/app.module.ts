import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ShipComponent } from './ship/ship.component';
import { SquareService } from './services/square.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ShipBoardComponent } from './ship-board/ship-board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ShipComponent,
    ShipBoardComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ],
  providers: [SquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
