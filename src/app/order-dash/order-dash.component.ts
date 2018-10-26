import { Component, OnInit } from '@angular/core';
import {Order} from '../documents';
import {InformationService} from '../information.service';


@Component({
  selector: 'app-order-dash',
  templateUrl: './order-dash.component.html',
  styleUrls: ['./order-dash.component.css']
})
export class OrderDashComponent implements OnInit {

  orders: Order[];

  constructor(private InformationService: InformationService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders():void{
    this.orders = this.InformationService.getOrders();
  }

}
