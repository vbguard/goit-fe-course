import Model from '../Model';

describe('Model class', () => {
  it('Should create Model instance', () => {
    const model = new Model();

    expect(model instanceof Model).toBe(true);
  });

  it('Should add new item', () => {
    const model = new Model();
    const newBookmark = {
      id: '1dsawq',
      title: 'Title',
      description: 'bla lba',
      image: 'url to image',
      url: 'url to site',
      userValue: 'user input url',
    };
    expect(model.addBookmark(newBookmark, jest.fn(), 'https://dada.com'));
  });

  it('should init Application with data', () => {
    const model = new Model();
    expect(
      model.init([
        {
          id: '1dsawq',
          title: 'Title',
          description: 'bla lba',
          image: 'url to image',
          url: 'url to site',
          userValue: 'user input url',
        },
      ]),
    ).toHaveLength(1);
  });

  it('should remove bookmark', () => {
    const model = new Model();
    model.init([
      {
        id: '1dsawq',
        title: 'Title',
        description: 'bla lba',
        image: 'url to image',
        url: 'url to site',
        userValue: 'user input url',
      },
    ]);

    const localStorage = jest.fn();

    expect(model.removeBookmark()).toHaveBeenCalledTimes(1);
  });
});
