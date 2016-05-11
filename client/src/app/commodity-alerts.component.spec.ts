import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CommodityAlertsAppComponent } from '../app/commodity-alerts.component';

beforeEachProviders(() => [CommodityAlertsAppComponent]);

describe('App: CommodityAlerts', () => {
  it('should create the app',
      inject([CommodityAlertsAppComponent], (app: CommodityAlertsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'commodity-alerts works!\'',
      inject([CommodityAlertsAppComponent], (app: CommodityAlertsAppComponent) => {
    expect(app.title).toEqual('commodity-alerts works!');
  }));
});
