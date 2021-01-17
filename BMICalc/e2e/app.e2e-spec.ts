import { BMICalcPage } from './app.po';

describe('bmicalc App', function() {
  let page: BMICalcPage;

  beforeEach(() => {
    page = new BMICalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
