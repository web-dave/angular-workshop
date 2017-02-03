import { Angular2Workshop201611DataportPage } from './app.po';

describe('angular2-workshop-2016-11-dataport App', function() {
  let page: Angular2Workshop201611DataportPage;

  beforeEach(() => {
    page = new Angular2Workshop201611DataportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dp works!');
  });
});
