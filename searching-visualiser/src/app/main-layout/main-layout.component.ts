import { ChangeDetectorRef, Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ViewChildren, ElementRef, QueryList } from '@angular/core';

import { SearchingFunctions, SearchingFunctionsObjectType } from '../searching-functions';
import { SettingsGeneralService } from './services/settings-general.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  @ViewChildren('searchingCanvases', {read: ElementRef})
  searchingCanvases!: QueryList<ElementRef>;

  searchingCanvasWidth: number = 0;
  searchingCanvasHeight: number = 200;
  searchingFunctions: SearchingFunctionsObjectType | any = SearchingFunctions;

  selectedDataStructureKey: string = '';
  selectedSearchingFunctionKeys: string[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private settingsGeneralService: SettingsGeneralService,
  ) { }

  ngOnInit() {
    this.settingsGeneralService.selectedDataStructureKey.subscribe(key =>
      this.selectedDataStructureKey = key
    );
    this.settingsGeneralService.selectedSearchingFunctionKeys.subscribe(keys =>
      this.selectedSearchingFunctionKeys = keys
    );
  }

  ngAfterViewInit() {
    this.searchingCanvases.changes.subscribe(() => { this.refreshCanvas(); this.detectChanges(); } );
  }

  @HostListener('window:resize')
  onResize() {
    this.refreshCanvas();
  }

  refreshCanvas() {
    this.searchingCanvasWidth = this.searchingCanvases.length > 0 ? this.searchingCanvases.first.nativeElement.offsetWidth - 10 : 0;
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
}
