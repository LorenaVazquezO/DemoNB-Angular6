import { Component, OnInit } from '@angular/core';
import {Invoice} from '../documents';
import {InformationService} from '../information.service';

@Component({
  selector: 'app-invoice-dash',
  templateUrl: './invoice-dash.component.html',
  styleUrls: ['./invoice-dash.component.css']
})
export class InvoiceDashComponent implements OnInit {

  invoices: Invoice[];

  constructor(private InformationService: InformationService) { }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices():void{
    this.invoices = this.InformationService.getInvoices();
  }

}
