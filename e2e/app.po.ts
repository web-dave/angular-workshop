import { browser, element, by } from 'protractor';

export class Angular2Workshop201611DataportPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dp-root h1')).getText();
  }
}
