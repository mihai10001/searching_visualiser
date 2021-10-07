// import { ResultsObjectClass } from './main-layout/services/results.service';
import { Possible2DGridValues } from './searching-data-structures';

/* Interface for defining a searching function for a two-dimensional grid  */
export type Searching2DGridFunctionObjectType = {
    [functionName: string]: Searching2DGridFunctionType
}

type Searching2DGridFunctionType = (
  grid: number[][],
  delay: number
) => Promise<any>

export const Searching2DGridFunctions: Searching2DGridFunctionObjectType = {
  'BFS': async (grid: number[][], delay: number) => {
    // let results: ResultsObjectClass = new ResultsObjectClass();

    const rows = grid.length;
    const cols = grid[0].length;
    const directionVectorRows = [-1, 0, 1, 0];
    const directionVectorCols = [0, 1, 0, -1];
    
    const isValid = (grid: number[][], row: number, col: number) => {
      if (row < 0 || col < 0 || row >= rows || col >= cols)
        return false;

      if (grid[row][col] === Possible2DGridValues.Visited)
        return false;

      return true;
    }

    const BFS = async (grid: any) => {
      let q = [];
      let startRowIndex = 0;
      let startColIndex = 0;

      grid[startRowIndex][startColIndex] = Possible2DGridValues.Visited;
      q.push([startRowIndex, startColIndex]);

      while (q.length != 0) {
        let currentElementIndex: any = q.shift();
        let currentRowIndex = currentElementIndex[0];
        let currentColIndex = currentElementIndex[1];
    
        for (let i = 0; i < 4; i++) {
          let adjentRowIndex = currentRowIndex + directionVectorRows[i];
          let adjentColIndex = currentColIndex + directionVectorCols[i];

          if (isValid(grid, adjentRowIndex, adjentColIndex)) {
            if (grid[adjentRowIndex][adjentColIndex] === Possible2DGridValues.NotVisited) return;
            grid[adjentRowIndex][adjentColIndex] = Possible2DGridValues.Visited;
            q.push([adjentRowIndex, adjentColIndex]);
          }

          await sleep(delay);
        }
      }
    }

    await BFS(grid);
    // return results;
  },

  'DFS': async (grid: number[][], delay: number) => {
    // let results: ResultsObjectClass = new ResultsObjectClass();

    const rows = grid.length;
    const cols = grid[0].length;
    const directionVectorRows = [-1, 0, 1, 0];
    const directionVectorCols = [0, 1, 0, -1];
    
    const isValid = (grid: number[][], row: number, col: number) => {
      if (row < 0 || col < 0 || row >= rows || col >= cols)
        return false;

      if (grid[row][col] === Possible2DGridValues.Visited)
        return false;

      return true;
    }

    const DFS = async (grid: any) => {
      let q = [];
      let startRowIndex = 0;
      let startColIndex = 0;

      grid[startRowIndex][startColIndex] = Possible2DGridValues.Visited;
      q.push([startRowIndex, startColIndex]);

      while (q.length != 0) {
        let currentElementIndex: any = q.pop();
        let currentRowIndex = currentElementIndex[0];
        let currentColIndex = currentElementIndex[1];

        if (isValid(grid, currentRowIndex, currentColIndex)) continue;
        grid[currentRowIndex][currentColIndex] = Possible2DGridValues.Visited;
    
        for (let i = 0; i < 4; i++) {
          let adjentRowIndex = currentRowIndex + directionVectorRows[i];
          let adjentColIndex = currentColIndex + directionVectorCols[i];
          q.push([adjentRowIndex, adjentColIndex]);
          await sleep(delay);
        }
      }
    }

    await DFS(grid);
    // return results;
  },


}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}