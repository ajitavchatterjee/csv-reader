import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvReaderService {

    constructor() { }
    isCSVFile(file:any) {
        return file.name.endsWith(".csv");
    }
}
