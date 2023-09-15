import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  succes(title: string, text: string) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }

  error(title: string, text: string) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      timer: 3000
    });
  }

}
