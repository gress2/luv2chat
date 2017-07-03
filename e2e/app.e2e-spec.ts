import { Luv2chatPage } from './app.po';

describe('luv2chat App', () => {
  let page: Luv2chatPage;

  beforeEach(() => {
    page = new Luv2chatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
