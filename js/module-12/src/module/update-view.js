import listUrlItemTpl from '../template/list-url-item.hbs';

const ViewUpdate = (bookmarks, listUrl) => {

  function compareDate (a, b) {
    return b.createDate - a.createDate;
  };

  bookmarks.sort(compareDate);

  const markup = String(bookmarks.reduce((markup, bookmark) =>
    markup + listUrlItemTpl(bookmark), ''));

  listUrl.innerHTML = markup;
};

export default ViewUpdate;
