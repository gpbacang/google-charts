import { GoogleChartsPage } from './app.po';

describe('google-charts App', () => {
  let page: GoogleChartsPage;

  beforeEach(() => {
    page = new GoogleChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
