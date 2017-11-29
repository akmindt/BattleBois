import { Injectable } from '@angular/core';

export class Square {

  constructor(
    public hit: number,
    public hasShip: boolean,
    public x: number,
    public y: number,
  ) { }
}
  @Injectable()
  export class SquareService {
    player1: Square[][];
    player2: Square[][];

    public getP1Squares(): Square[][] {
      return this.player1;
    }

    public setP1Squares(newGrid: Square [][]) {
      this.player1 = newGrid;
    }

    constructor() {
      this.player1 = new Array<Array<Square>>();
      this.player2 = new Array<Array<Square>>();
      for (let i = 0; i < 10; i++) {
        this.player1[i] = [];
        this.player2[i] = [];
        for (let j = 0; j < 10; j++) {
          this.player1[i][j] = {hit: 0, hasShip: false, x : j, y : i};
          this.player2[i][j] = {hit: 0, hasShip: false, x : j, y : i};
        }
           } }
}
