import get from '../services/linkviewAPI';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init = this.initApp.bind(this);

    view.on('add', value => this.addBookmark(value));
    view.on('remove', id => this.removeBookmark(id));
  }

  initApp() {
    if (getLocalStorage === null) return;
    this.view.init(this.model.init(getLocalStorage('bookmarks')));
  }

  addBookmark(value) {
    const itUrlHave = this.model.isHaveInBookmarks(value);

    if (itUrlHave) {
      this.view.formReset();
      return;
    }

    get(value)
      .then(data => this.model.addBookmark(data, setLocalStorage, value))
      .then(resolve => this.view.addBookmark(resolve));
  }

  removeBookmark(id) {
    this.model.removeBookmark(id, setLocalStorage);
    this.view.removeBookmark(id);
  }
}
