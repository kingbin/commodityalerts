import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Commodity }    from './commodity';
@Component({
  moduleId: module.id,
  selector: 'commodity-alerts-form',
  templateUrl: 'commodity-form.component.html',
  styleUrls: ['commodity-form.component.css']
})
export class CommodityFormComponent {
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.quotesModel); }
  
  quotesModel = "";
  stockQuotes = [new Commodity(1, 'Alphabet Inc.', 'GOOG', 719.50, '+6.60', 715.72, 721.35)];

  submitted = false;
  onSubmit() { this.submitted = true; }
  
  loadDefaultQuotes() {
    this.quotesModel = "GOOG,YHOO,CH16.CBT,CH17.CBT";
    this.stockQuotes = [new Commodity(1, 'Alphabet Inc.', 'GOOG', 719.50, '+6.60', 715.72, 721.35),
                        new Commodity(2,'Yahoo! Inc.','YHOO',27.44,'+0.26',0,37.48),
                        new Commodity(3,'Corn Mar 16','CH16.CBT',364.50,'-2.25',364.25,367.75),
                        new Commodity(4,'Corn Futures,Mar-2017,Composite','CH17.CBT',386.75,'+0.25',385.25,389.00)];
  }
  
  clearQuotes() {
    this.quotesModel = "";
    this.stockQuotes = [];
  }  
  
}