import { Component, Inject, provide } from '@angular/core';
import { NgForm }    from '@angular/common';

import { CommodityService }    from './commodity.service';

@Component({
  moduleId: module.id,
  selector: 'commodity-alerts-form',
  templateUrl: 'commodity-form.component.html',
  styleUrls: ['commodity-form.component.css'],
//  providers: [CommodityService],
})

export class CommodityFormComponent {
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.status); }
  
  constructor(private commodityService: CommodityService) { }

  status: string;
  errorMessage: string;
  stockQuotes: Array<any>;
  
  quotesModel = "";

  submitted = false;
  onSubmit() { this.submitted = true; }
  
  loadDefaultQuotes() {
    this.quotesModel = "GOOG,YHOO,CH16.CBT,CH17.CBT";
    this.commodityService.getCommodities(this.quotesModel)
      .subscribe(
        quotes => this.stockQuotes = quotes,
        error =>  this.errorMessage = <any>error);
  }
  
  clearQuotes() {
    this.quotesModel = "";
    this.stockQuotes = [];
  }
  
  checkES6() {
    "use strict";
    
    try { eval("var foo = (x)=>x+1"); }
    catch (e) { this.status = 'false'; return false; }
    this.status = 'true';
    return true;
  }
  
}