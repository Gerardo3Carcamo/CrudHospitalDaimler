import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit{

  viewAllEmployees:any;
  employeeNumber:any;
  clonedProducts:any = {};
  dataEmployees:any = [
    {id:1, name: 'Gerardo Carcamo', role: 'Supervisor', area:'PNT'}
  ];

  ngOnInit(): void {
      
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: any) {
    
  }

  onRowEditCancel(product: any, index: number) {
      this.dataEmployees[index] = this.clonedProducts[product.id as string];
      delete this.clonedProducts[product.id as string];
  }

}
