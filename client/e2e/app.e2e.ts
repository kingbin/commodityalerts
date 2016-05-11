import { CommodityAlertsPage } from './app.po';

describe('commodity-alerts App', function() {
  let page: CommodityAlertsPage;

  beforeEach(() => {
    page = new CommodityAlertsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('commodity-alerts works!');
  });
});
