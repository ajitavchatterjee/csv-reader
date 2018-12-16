import { Component, OnInit } from '@angular/core';
import { CsvReaderService } from './csv-reader.service';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {
  public headerList:any;
  public data:any=[];
  public csvContent:any;
  public papax:any
  constructor(private csvReaderUtilObj:CsvReaderService) {
   }

  onFileChange(e:any) {
    this.headerList = [];
    this.data = [];
    const file = e.target.files[0];
    if(this.csvReaderUtilObj.isCSVFile(file)){
      this.readFileContent(file).then((res:any)=>{
        this.formatCsv(res.result);
      }).catch(error=>{
        alert('Error: Unable to read the file');
      });
    }else{
      alert("Only CSV files are accepted");
      this.resetFile(e.target);
    }
  }

  readFileContent(file:any){
    const fileReader = new FileReader();

    return new Promise((resolve,reject)=>{
      fileReader.onload = event => resolve(event.target);
      fileReader.onerror = error => reject(error);
      fileReader.readAsText(file, "UTF-8");
    });
  }

  formatCsv(csvText:string){
    let lines= csvText.split('\n');
    this.headerList= lines[0].split(',');
    for(var i = 1; i < lines.length; i++){
      var obj = {};
      var currentline = lines[i].split(',');
      for(var j = 0; j < this.headerList.length; j++){
        obj[this.headerList[j]] = currentline[j];
      }
      this.data.push(obj);
    }
  }
  resetFile(element:any){
    element.value = "";
    this.headerList = [];
    this.data = [];
  }
  ngOnInit() {
  }

}
