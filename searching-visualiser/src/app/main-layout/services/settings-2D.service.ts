import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Settings2DGridService {

    private _delay: number = 10;
    private _input2DGrid: number[][] = [];
    private _input2DGridRows: number = 20;
    private _input2DGridCols: number = 20;

    get delay(): number {
        return this._delay;
    }
    set delay(delay: number) {
        this._delay = delay;
    }

    get input2DGrid(): number[][] {
        return this._input2DGrid;
    }
    set input2DGrid(input2DGrid: number[][]) {
        this._input2DGrid = input2DGrid;
    }

    get input2DGridRows(): number {
        return this._input2DGridRows;
    }
    set input2DGridRows(input2DGridRows: number) {
        this._input2DGridRows = input2DGridRows;
    }

    get input2DGridCols(): number {
        return this._input2DGridCols;
    }
    set input2DGridCols(input2DGridCols: number) {
        this._input2DGridCols = input2DGridCols;
    }
}