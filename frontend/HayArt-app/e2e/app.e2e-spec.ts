import { HayArtAppPage } from './app.po';

describe('hay-art-app App', function() {
  let page: HayArtAppPage;

  beforeEach(() => {
    page = new HayArtAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
