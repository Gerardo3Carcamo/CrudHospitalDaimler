import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  viewAllEmployees:any;
  employeeNumber:any;
  clonedProducts:any = {};
  dataEmployees:any;
  roles:any;

  ngOnInit(): void {
    this.GetAllRoles()
    this.searchAllEmployees()
  }

  async GetAllRoles(){
    this.roles = await this.api.GetMethod('Crud/GetAllAreas')
    console.log(this.roles.data)
  }
  async searchAllEmployees(){
    if(this.viewAllEmployees){
      let params = {
        id: this.employeeNumber
      }
      this.dataEmployees = await this.api.PostMethod(params, 'Crud/GetSpecificEmployee')
    }else{
      this.dataEmployees = await this.api.GetMethod('Crud/GetAllEmployees')
    }
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  async onRowEditSave(product: any) {
    let params = {
      id: product.id,
      email: product.email,
      phoneNumber: product.phoneNumber
    }
    let data = await this.api.PostMethod(params, 'Crud/UpdateEmployee')
    if(data.error){
      this.alert.error('Ups...','Ocurrio un error inesperado')
    }else{
      this.alert.succes('Registro actualizado','')
      this.searchAllEmployees()
    }
  }

  async onRowDelete(product:any){
    let params = {
      id: product.id
    }
    let data = await this.api.PostMethod(params, 'Crud/DeleteEmployee')
    if(data.error){
      this.alert.error('Ups...', 'Ocurrio un error inesperado')
    }else{
      this.alert.succes('Registro eliminado','')
      this.searchAllEmployees()
    }
  }

  onRowEditCancel(product: any, index: number) {
      this.dataEmployees[index] = this.clonedProducts[product.id as string];
      delete this.clonedProducts[product.id as string];
  }

}
