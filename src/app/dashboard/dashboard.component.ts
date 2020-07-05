import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  api: GridApi;
  columnApi: ColumnApi;
  restaurantList = [];
  columnDefs = [];
  rowData = [];
  defaultColDef;
  paginationNumberFormatter;
  rowSelection;
  constructor(private service: RestaurantService) {
    this.init();
  }

  ngOnInit(): void {
    this.getRestaurantList();
  }


  public onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.agGrid.api.sizeColumnsToFit();
  }

  getRestaurantList = () => {
    this.service.getRestaurantList().subscribe((response) => {
      this.restaurantList = response;
      this.rowData = this.restaurantList;
    });
  }

  private init = () => {
    this.defaultColDef = {
      sortable: true,
      lockPosition: true,
      filter: true,
    };
    this.columnDefs = [
      {
        headerName: 'Restaurant ID',
        field: 'Restaurant ID',
        headerCheckboxSelection: true,
        checkboxSelection: true
      },
      {
        headerName: 'Restaurant Name',
        field: 'Restaurant Name',
      },
      {
        headerName: 'Cuisines',
        field: 'Cuisines',
      },
      {
        headerName: 'Average Cost for two',
        field: 'Average Cost for two',
      },
      {
        headerName: 'Currency',
        field: 'Currency',
      }
    ];
    this.rowSelection = 'multiple';
    this.paginationNumberFormatter = (params) => {
      return '[' + params.value.toLocaleString() + ']';
    };
  }

}
