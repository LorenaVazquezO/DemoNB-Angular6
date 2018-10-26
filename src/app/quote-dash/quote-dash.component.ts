import { Component, OnInit } from '@angular/core';
import {Quote} from '../documents';
import {InformationService} from '../information.service';

@Component({
  selector: 'app-quote-dash',
  templateUrl: './quote-dash.component.html',
  styleUrls: ['./quote-dash.component.css']
})
export class QuoteDashComponent implements OnInit {

  quotes: Quote[];

  constructor(private InformationService: InformationService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes():void{
    this.quotes = this.InformationService.getQuotes();
  }
}
