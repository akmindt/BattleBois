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
    squares: Square[][];

    public getSquares(): Square[][] {
      return this.squares;
    }
    constructor() {
      this.squares = new Array<Array<Square>>();
      for (let i = 0; i < 10; i++) {
        this.squares[i] = [];
        for (let j = 0; j < 10; j++) {
          this.squares[i][j] = {hit: 0, hasShip: false, x : i, y : j};
        }
           } }
}
