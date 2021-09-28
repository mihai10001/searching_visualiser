// import { ResultsObjectClass } from './main-layout/services/results.service';

/* Interface for defining a searching function for a two-dimensional grid  */
export type Searching2DGridFunctionObjectType = {
    [functionName: string]: Searching2DGridFunctionType
}

type Searching2DGridFunctionType = (
  grid: number[][],
  delay: number
) => Promise<any>

export const Searching2DGridFunctions: Searching2DGridFunctionObjectType = {



}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}