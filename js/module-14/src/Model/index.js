import v4 from 'uuid/v4';

export default class Model {
  constructor(bookmarks = []) {
    this.bookmarks = bookmarks;
  }

  init(data) {
    data.reverse();
    this.bookmarks.push(...data);
    return this.bookmarks;
  }

  isHaveInBookmarks(value) {
    const findBookmark = this.bookmarks.find(
      bookmark => bookmark.userValue === value,
    );
    return findBookmark;
  }

  addBookmark(data, localStorage, value) {
    const bookmark = {
      id: v4(),
      title: data.title,
      description: data.description,
      image: data.image,
      url: data.url,
      userValue: value,
    };

    this.bookmarks.push(bookmark);

    localStorage('bookmarks', this.bookmarks);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(bookmark);
      }, 200);
    });
  }

  removeBookmark(id, localStorage) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
    localStorage('bookmarks', this.bookmarks);
  }
}
