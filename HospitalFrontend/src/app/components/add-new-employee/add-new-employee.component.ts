import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit{

  constructor(public api: ApiService){}

  formControl:any;

  ngOnInit(): void {
    this.formControl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required])
    }); 
  }

  async saveNewEmployee() {
    let params = {
      name: 'Hola', 
      RoleId: 1
    }
    this.api.PostMethod(params, 'Crud/saveNewEmployee')
  }

}

