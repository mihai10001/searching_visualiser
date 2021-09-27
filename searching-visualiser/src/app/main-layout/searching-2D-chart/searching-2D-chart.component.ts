import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { SettingsGeneralService } from '../services/settings-general.service';
import { Settings2DGridService } from '../services/settings-2D.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searching-2D-chart',
  templateUrl: './searching-2D-chart.component.html',
  styleUrls: ['./searching-2D-chart.component.css']
})
export class Searching2DChartComponent implements OnInit, OnDestroy {

  @Input() componentWidth: number = 0;
  @Input() componentHeight: number = 0;
  @Input() searchingFunction: Function = Function();
  @Input() searchingFunctionName: string = '';

  delay: number = this.settings2DGridService.delay;
  input2DGrid: number[][] = [...this.settings2DGridService.input2DGrid];
  input2DGridRows: number = this.settings2DGridService.input2DGridRows;
  input2DGridCols: number = this.settings2DGridService.input2DGridCols;

  playSearchingSubscription: Subscription =  new Subscription();

  constructor(
    private settings2DGridService: Settings2DGridService,
    private settingsGeneralService: SettingsGeneralService,
  ) { }

  async ngOnInit() {
    this.playSearchingSubscription = this.settingsGeneralService.playSearchingFunction.subscribe(async () => {
      this.reloadSettings();
      await this.searchingFunction(this.input2DGrid, this.delay);
    });
  }

  reloadSettings() {
    this.delay = this.settings2DGridService.delay;
    this.input2DGrid = [...this.settings2DGridService.input2DGrid];
    this.input2DGridRows = this.settings2DGridService.input2DGridRows;
    this.input2DGridCols = this.settings2DGridService.input2DGridCols;
  }

  ngOnDestroy() {
    this.playSearchingSubscription.unsubscribe();
  }

}
