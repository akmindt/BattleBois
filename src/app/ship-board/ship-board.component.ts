import { Component, OnInit } from '@angular/core';
import {SquareService, Square} from '../services/square.service';

@Component({
  selector: 'app-ship-board',
  templateUrl: './ship-board.component.html',
  styleUrls: ['./ship-board.component.css']
})
export class ShipBoardComponent implements OnInit {
  grid: Square[][];
  constructor(private squareService: SquareService) {
    this.grid = this.squareService.getSquares();
  }

  ngOnInit() {
  }

}
