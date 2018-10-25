import { Component, OnInit } from '@angular/core';
import {Order} from '../documents';
import {InformationService} from '../information.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(private InformationService: InformationService) { }

  ngOnInit() {
  }

  getOrders():void{
    this.orders = this.InformationService.getOrders();
  }


}
