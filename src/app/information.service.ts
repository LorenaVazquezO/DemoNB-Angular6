import { Injectable } from '@angular/core';
import {Order} from './documents'
import {Orders} from './information'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  getOrders(): Order[]{
    return Orders
  }

  constructor() { }
}
