import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  showSuccessLoginAlert(message: string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  showAlert(message: string, icon: 'error' | 'success'){
    Swal.fire({
      icon: icon,
      text: message
    })
  }
}
