import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = "https://localhost:7110/api/";

  async GetMethod(path: string) {
    try {
      let response = await fetch(this.REST_API_SERVER + path);
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error inesperado'
        })
      }
      let data = await response.json();
      return data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrio un error inesperado'
      })
    }
  }
  async PostMethod(params: any, path: string) {
    try {
      const response = await fetch(this.REST_API_SERVER + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      console.log('🚀 ~ file: api.service.ts', data);
      return data;
    } catch (error) {
      let errorData = {
        statusText : 'Error',
      }
      return errorData
    }
  }

}
