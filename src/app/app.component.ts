import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { setStyle } from './util';
import { CssSelector } from '@angular/compiler';
import invoice from '../data/invoice.json';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import bwipjs from 'bwip-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["#{setStyle()}"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public invoicedata;
  public css = "";
  public links;

  public renderkixcode(): void {
    bwipjs('kixcodeCanvas', {
      bcid: 'kix',        // Barcode type
      text: '987654321',   	  // Text to encode
      scale: 2,               // 3x scaling factor
      //height: 10,             // Bar height, in millimeters
      //width: 10,
      includetext: false,      // Show human-readable text
      textxalign: 'center',   // Always good to set this
    }, (err, cvs) => {
      if (err) {
        console.log(err);
      } else {
      }
    });
  }
  title = 'paymarkinvoice';
  ngOnInit() {
    console.log(invoice);
    this.renderkixcode();
    this.invoicedata = invoice;
  }

  }

