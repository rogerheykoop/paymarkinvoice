import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { setStyle } from './util';
import { CssSelector } from '@angular/compiler';
import invoice from '../data/invoice.json';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [setStyle()],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public invoicedata;
  public css = "";
  public links;

  title = 'paymarkinvoice';
  ngOnInit() {
    console.log(invoice);
    this.invoicedata = invoice;
  }

  }

