import { Injectable } from '@angular/core';
import { paymentType } from 'src/app/_models/product/payment-Type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypes: paymentType[] = [
    { id: 1, name: "CDD" },
    { id: 2, name:" paypal "},
    { id: 3, name: "Debitcard" },
    { id: 4, name: "vesa" },
    { id: 5, name: "Master crard" },
    { id: 6, name: "Americian Express" },
    
]
  constructor() { }
  getAllpaymentType(): paymentType[] {
    return this.paymentTypes;
   }
  getbyid() { }
  add() { }
  edit() { }
  delete() { }


  }

