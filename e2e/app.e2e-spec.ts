import { CleartripChallengePage } from './app.po';

describe('cleartrip-challenge App', () => {
  let page: CleartripChallengePage;

  beforeEach(() => {
    page = new CleartripChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
