
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { environment, CommodityService, Logger,  CommodityFormComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CommodityFormComponent, [ Logger, CommodityService, Http, HTTP_PROVIDERS, ]);