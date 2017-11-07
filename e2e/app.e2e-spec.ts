import { ProjectEulerPage } from './app.po';

describe('project-euler App', function() {
  let page: ProjectEulerPage;

  beforeEach(() => {
    page = new ProjectEulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
