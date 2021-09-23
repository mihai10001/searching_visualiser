import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsGeneralService {

  private _playSearchingFunction: Subject<boolean> = new Subject();
  private _selectedDataStructureKey: Subject<string> = new Subject();
  private _selectedSearchingFunctionKeys: Subject<string[]> = new Subject();

  get playSearchingFunction(): Subject<boolean> {
    return this._playSearchingFunction;
  }
  set playSearchingFunctionValue(play: boolean) {
    this._playSearchingFunction.next(play);
  }

  get selectedDataStructureKey(): Subject<string> {
    return this._selectedDataStructureKey;
  }
  set selectedDataStructureKeyValue(selectedDataStructureKey: string) {
    this._selectedDataStructureKey.next(selectedDataStructureKey);
  }

  get selectedSearchingFunctionKeys(): Subject<string[]> {
    return this._selectedSearchingFunctionKeys;
  }
  set selectedSearchingFunctionKeysValue(selectedSearchingFunctionKeys: string[]) {
    this._selectedSearchingFunctionKeys.next(selectedSearchingFunctionKeys);
  }

}
