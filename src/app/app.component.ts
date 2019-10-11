import { Component,OnInit } from '@angular/core';
import invoice from '../data/invoice.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public invoicedata;
  public test = "bla";
  title = 'paymarkinvoice';
  ngOnInit() {
    this.invoicedata = invoice;
  //  this.getContentJSON();
  }

  getContentJSON() {
    var data = require('src/data/invoice.json');
    this.invoicedata = JSON.stringify(data);
  }

  }

