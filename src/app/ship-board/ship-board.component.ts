import { Component, OnInit } from '@angular/core';
import { SquareService, Square } from '../services/square.service';
import { GameBoardComponent } from '../game-board/game-board.component';

@Component({
  selector: 'app-ship-board',
  templateUrl: './ship-board.component.html',
  styleUrls: ['./ship-board.component.css']
})
export class ShipBoardComponent implements OnInit {
  grid: Square[][];
  shipLength: number;
  shipName: string;
  constructor(private squareService: SquareService) {
    this.grid = this.squareService.getP1Squares();
    this.shipLength = 0;
    this.shipName = '';
  }

  shipClick(shipName, shipLength) {
    this.shipLength = shipLength;
    this.shipName = shipName;
  }

  boardClick(cell: Square) {
    const isVertical = <HTMLInputElement> document.getElementById('orientation');
    
    if(!this.checkValidPlacement(cell, isVertical.checked)){
      return;
    }

    for (let i = 0; i < this.shipLength; i++) {
      if (isVertical.checked) {
        
        
        this.grid[cell.y + i][cell.x].hasShip = true;
      } else {
      this.grid[cell.y][cell.x + i].hasShip = true;
      }
      if (this.shipLength - 1 === i) {
        const element = <HTMLInputElement> document.getElementById(this.shipName);
        element.disabled = true;
        this.shipLength = 0;
      }
    }
  }

  checkValidPlacement(cell: Square, isVertical: boolean): boolean{
    for (let i = 0; i < this.shipLength; i++) {
      if(isVertical) {
        if (this.grid[cell.y + this.shipLength] === undefined) {
          alert('Ship placement out of bounds.');
          return false;
        }
        if (this.grid[cell.y + i][cell.x].hasShip) {
          alert('There\'s a ship there already!');
          return false;
        }
      } else{
        if (this.grid[cell.y][cell.x + this.shipLength] === undefined) {
          alert('Ship placement out of bounds.');
          return false;
        }
        if (this.grid[cell.y][cell.x + i].hasShip) {
          alert('There\'s a ship there already!');
          return false;
        }
      }
    }
    return true;
  }

  saveShipPlacement() {
    this.squareService.setP1Squares(this.grid);
  }

  ngOnInit() {
  }

}
