import { InputDataStructureTypes } from './searching-data-structures';
import { Searching2DGridFunctions, Searching2DGridFunctionObjectType } from './searching-2D-functions';

export type SearchingFunctionsObjectType = {
    [dataStructureName in InputDataStructureTypes]: Searching2DGridFunctionObjectType | Function
}

export const SearchingFunctions: SearchingFunctionsObjectType = {
  '2DGrid': Searching2DGridFunctions,
  '3DGrid': Searching2DGridFunctions,
  'BinaryTree': Searching2DGridFunctions,
  // "Graph"
}
