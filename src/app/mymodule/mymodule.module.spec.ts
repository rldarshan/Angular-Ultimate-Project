import { MymoduleModule } from './mymodule.module';

describe('MymoduleModule', () => {
  let mymoduleModule: MymoduleModule;

  beforeEach(() => {
    mymoduleModule = new MymoduleModule();
  });

  it('should create an instance', () => {
    expect(mymoduleModule).toBeTruthy();
  });
});
