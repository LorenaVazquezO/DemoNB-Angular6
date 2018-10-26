import { Injectable } from '@angular/core';
import {Order} from './documents';
import {Orders} from './information';
import {Quote} from './documents';
import {Quotes} from './information';
import {Invoice} from './documents';
import {Invoices} from './information';


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  getOrders(): Order[]{
    return Orders
  }

  getQuotes(): Quote[]{
    return Quotes
  }

  getInvoices(): Invoice[]{
    return Invoices
  }

  constructor() { }
}
