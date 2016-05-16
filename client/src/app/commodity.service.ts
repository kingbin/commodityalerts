import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Logger }       from './logger.service';
//import { Commodity }    from './commodity';
import { COMMODITIES }  from './mock-commodity';

@Injectable()
export class CommodityService {
  constructor(private http: Http, private logger: Logger) { }

  getCommodities (symbols:string): Observable<any[]> {
    var s = '"'+symbols.replace(/[^\w\s\.\"]/gi, '","')+'"';
    
    var url ='https://query.yahooapis.com/v1/public/yql?' +    
    'q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20'+
    '('+s+')&format=json' +
    '&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    
    this.logger.log("YQL QUERY: "+url);
      
    return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    var result = new Array<any>();

    if( !Array.isArray(body.query.results.quote) ) {
        result.push(body.query.results.quote);
    }
    else result = body.query.results.quote;
    
    return result;
  }
  
  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    this.logger.log(errMsg);
    return Observable.throw(errMsg);
  }

  getMockCommodities(symbols: string) {
    this.logger.log(`Getting commodities`);
    return COMMODITIES;
  }
}