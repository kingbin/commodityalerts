export class CommodityAlertsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('commodity-alerts-app h1')).getText();
  }
}
