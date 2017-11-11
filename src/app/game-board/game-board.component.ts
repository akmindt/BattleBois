import { Component, OnInit } from '@angular/core';
import {SquareService, Square} from '../services/square.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  grid: Square[][];
  constructor(private squareService: SquareService) {
    this.grid = this.squareService.getSquares();
  }

  ngOnInit() {
  }

}
