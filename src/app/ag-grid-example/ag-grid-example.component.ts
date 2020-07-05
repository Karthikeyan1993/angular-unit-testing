import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css']
})
export class AgGridExampleComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  rowData = [];
  columnDefs = [];
  rowSelection = 'multiple';
  constructor() { }

  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'Make', field: 'make', sortable: true, headerCheckboxSelection: true, checkboxSelection: true },
      { headerName: 'Model', field: 'model', sortable: true },
      { headerName: 'Price', field: 'price', sortable: true }
    ];
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }

  onGridReady = (event) => {

  }

  test = () => {
    this.agGrid.api.deselectAll();
  }

  getSelectedRows = () => {
    console.log(this.agGrid.api.getSelectedRows());
    console.log(this.agGrid.api.getSelectedNodes());
    this.agGrid.api.getSelectedNodes().forEach(ele =>{
      console.log(ele.setSelected(false));
    });
  }

}
