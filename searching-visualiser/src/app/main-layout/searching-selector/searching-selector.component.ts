import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchingFunctions, SearchingFunctionsObjectType } from '../../searching-functions';
import { InputDataStructureTypes } from '../../searching-data-structures';

import { SettingsGeneralService } from '../services/settings-general.service';
import { Settings2DGridService } from '../services/settings-2D.service';
// import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-searching-selector',
  templateUrl: './searching-selector.component.html',
  styleUrls: ['./searching-selector.component.css']
})
export class SearchingSelectorComponent implements OnInit {

  dataStructureTypes: InputDataStructureTypes[] = Object.values(InputDataStructureTypes);
  searchingFunctions: SearchingFunctionsObjectType | any = SearchingFunctions;
  selectedDataStructureForm: FormControl = new FormControl();
  selectedSearchingFunctionForm: FormControl = new FormControl();

  playClickedCount: number = 0;

  constructor(
    private settings2DGridService: Settings2DGridService,
    private settingsGeneralService: SettingsGeneralService,
  ) {}

  ngOnInit() {
    this.settings2DGridService.input2DGrid = this.generate2DGrid(this.settings2DGridService.input2DGridRows, this.settings2DGridService.input2DGridCols);

    this.selectedSearchingFunctionForm.valueChanges.subscribe(formValue => {
      this.settingsGeneralService.selectedSearchingFunctionKeysValue = formValue;
    });
    this.selectedDataStructureForm.valueChanges.subscribe(formValue => {
      this.settingsGeneralService.selectedDataStructureKeyValue = formValue;
    });
  }

  generate2DGrid(rows: number, cols: number) {
    return Array.from(Array(rows), _ => Array(cols).fill(0));
  }

  onPlay() {
    this.playClickedCount++;
    if (this.playClickedCount > 1)
      this.settings2DGridService.input2DGrid = this.generate2DGrid(this.settings2DGridService.input2DGridRows, this.settings2DGridService.input2DGridCols);

    this.settingsGeneralService.playSearchingFunctionValue = true;
  }
}