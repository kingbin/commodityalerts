import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Config {
  apiEndpoint: string,
  title: string
}

export const CONFIG:Config = {
  apiEndpoint: 'api.armt.com',
  title: 'Dependency Injection'
};