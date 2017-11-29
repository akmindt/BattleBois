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
    const element = <HTMLInputElement>document.getElementById(target.x + ',' + target.y);

    if (!this.checkIfShipsPlaced()) {
      alert('You have not completed ship placement.');
      return;
    }

    if (target.hasShip) {
      target.hit = 1;
      element.className = 'hit mat-button';
      element.disabled = true;
    } else {
      target.hit = -1;
      element.className = 'miss mat-button';
      element.disabled = true;
    }
  }

  checkIfShipsPlaced(): boolean {
    const battleship = <HTMLInputElement>document.getElementById('battleship');
    const cruiser = <HTMLInputElement>document.getElementById('cruiser');
    const submarine = <HTMLInputElement>document.getElementById('submarine');
    const destroyer = <HTMLInputElement>document.getElementById('destroyer');
    const aircraft = <HTMLInputElement>document.getElementById('aircraft');

    if (battleship.disabled && cruiser.disabled && submarine.disabled && destroyer.disabled && aircraft.disabled) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
