/*
import { provide }     from '@angular/core';

import { CommodityService } from './commodity.service';
import { Logger }      from './logger.service';
import { Http } from '@angular/http';

let commodityServiceFactory = (http: Http, logger: Logger) => {
  return new CommodityService(http, logger);
}

export let commodityServiceProvider =
  provide(CommodityService, {
    useFactory: commodityServiceFactory,
    deps: [Http, Logger]
  });
*/