import listUrlItemTpl from '../template/list-url-item.hbs';

const ViewUpdate = (bookmarks, listUrl) => {
  const markup = String(bookmarks.reduce((markup, bookmark) =>
    markup + listUrlItemTpl(bookmark), ''));

  listUrl.innerHTML = markup;
};

export default ViewUpdate;
