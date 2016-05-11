import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, CommodityFormComponent } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CommodityFormComponent);