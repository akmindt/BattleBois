import { Component, OnInit } from '@angular/core';
import { SquareService, Square } from '../services/square.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  player1: Square[][];
  constructor(private squareService: SquareService) {
    this.player1 = this.squareService.getP1Squares();
  }

  shoot(target: Square) {
    if (target.hasShip) {
      target.hit = 1;
    }else {
      target.hit = -1;
    }
  }

  ngOnInit() {
  }

}
