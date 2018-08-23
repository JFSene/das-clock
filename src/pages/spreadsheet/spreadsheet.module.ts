import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpreadsheetPage } from './spreadsheet';

@NgModule({
  declarations: [
    SpreadsheetPage,
  ],
  imports: [
    IonicPageModule.forChild(SpreadsheetPage),
  ],
})
export class SpreadsheetPageModule {}
