import { Component, OnInit } from '@angular/core';
import {GameService} from '../brain/game.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public pieces = [{visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}];
  public winner: number = 0;
  private _game: GameService;

  constructor(game: GameService) {
    this._game = game;
  }

  add(column: number) {
    const winner = this._game.addPiece(column);
    const audio = new Audio('src/app/assets/audio/coin-drop-4.mp3');
    audio.play();
    if (winner === 0) {
      this._game.nextPlayer();
    } else if (winner !== -1) {
      this.winner = winner;
    }
  }

  show(i: number) {
    this.pieces.map((piece, index) => piece.visible = i === index);
  }

  get game(): GameService {
    return this._game;
  }

  playAgain() {
    this._game.clear();
    this.pieces = [{visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}, {visible: false}];
    this.winner = 0;
  }
  restart() {
    this._game.clear();
  }

  ngOnInit() {
  }

}
