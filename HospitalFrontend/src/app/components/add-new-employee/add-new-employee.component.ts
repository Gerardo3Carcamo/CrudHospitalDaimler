import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  formControl:any;
  roles:any;

  ngOnInit(): void {
    this.formControl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    }); 
    this.GetAllRoles();
  }

  async GetAllRoles(){
    this.roles = await this.api.GetMethod('Crud/GetAllAreas')
    console.log(this.roles.data)
  }

  async saveNewEmployee() {
    let params = {
      lastName: this.formControl.get('name').value,
      name: this.formControl.get('lastName').value, 
      RoleId: this.formControl.get('role').value,
      phoneNumber: this.formControl.get('phoneNumber').value,
      email:this.formControl.get('email').value,
      dateOdAdmission: new Date(),
      isActive:1
    }
    this.api.PostMethod(params, 'Crud/saveNewEmployee')
  }

}

