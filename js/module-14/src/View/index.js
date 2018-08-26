import EventEmitter from '../services/event-emitter';

export default class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.querySelector('.js-form');
    this.input = this.form.querySelector('input');
    this.button = this.form.querySelector('button');
    this.bookmarksList = document.querySelector('.js-bookmarks-list');
    // Some action for App
    this.form.addEventListener('submit', evt => this.handleAdd(evt));

    this.init = this.init.bind(this);
  }

  formReset() {
    this.form.reset();
  }

  addBookmark(data) {
    const bookmark = this.createBookmark(data);

    this.form.reset();

    this.bookmarksList.insertAdjacentElement('afterbegin', bookmark);
  }

  createBookmark(bookmark) {
    const item = document.createElement('div');
    item.dataset.id = bookmark.id;
    item.classList.add('bookmark', 'bookmarks__item');

    const link = document.createElement('a');
    link.classList.add('bookmark__link');
    link.href = bookmark.url;

    const title = document.createElement('h3');
    title.textContent = bookmark.title;
    title.classList.add('bookmark__title');
    link.appendChild(title);

    const image = document.createElement('img');
    image.src = bookmark.image;
    image.alt = bookmark.title;
    image.classList.add('bookmark__image');

    const description = document.createElement('p');
    description.textContent = bookmark.description;
    description.classList.add('bookmark__descr');

    const actions = document.createElement('div');
    actions.classList.add('bookmark__actions');

    const buttonRemove = document.createElement('button');
    buttonRemove.insertAdjacentHTML(
      'afterbegin',
      `<svg viewBox="-8 -8 50 50">
        <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2
          2v-6h-10zM18 4h-4v-2h4v2z">
        </path>
      </svg>`,
    );
    buttonRemove.dataset.action = 'remove';
    buttonRemove.classList.add('bookmark__button');

    actions.append(buttonRemove);

    item.append(link, image, description, actions);

    this.appendEventListners(item);

    return item;
  }

  appendEventListners(item) {
    const removeBtn = item.querySelector('[data-action="remove"]');
    removeBtn.addEventListener('click', this.handleRemove.bind(this));
  }

  handleAdd(evt) {
    evt.preventDefault();
    const { value } = this.input;
    if (value === '') return;
    this.emit('add', value);
  }

  handleRemove({ target }) {
    const parent = target.closest('.bookmarks__item');
    this.emit('remove', parent.dataset.id);
  }

  removeBookmark(id) {
    const item = this.bookmarksList.querySelector(`[data-id="${id}"]`);
    this.bookmarksList.removeChild(item);
  }

  init(bookmarks) {
    const elements = bookmarks.map(bookmark => this.createBookmark(bookmark));

    this.bookmarksList.append(...elements);
  }
}
