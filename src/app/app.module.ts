import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { CsvReaderService } from './csv-reader/csv-reader.service';

@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CsvReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
