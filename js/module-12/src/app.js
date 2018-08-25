'use strict';
import './styles.css';
import * as db from './services/database';
import ViewUpdate from './module/update-view';
import LinkView from './api/linkview';

const listUrl = document.querySelector('.js-url-list');
const form = document.querySelector('.js-form');

const urls = {
  bookmarks: []
};

const setLocalStorage = () => {
  localStorage.setItem('urls', JSON.stringify(urls.bookmarks))
};

db.get({
  urls,
  ViewUpdate,
  listUrl,
  setLocalStorage
});

form.addEventListener('submit', handlerSubmit);
listUrl.addEventListener('click', handleDeleteItem);

function handlerSubmit(evt) {
  evt.preventDefault();
  const userUrl = String(evt.target[0].value);
  LinkView({
    userUrl,
    listUrl,
    urls,
    ViewUpdate,
    setLocalStorage
  });

  setTimeout(() => {
    evt.target[0].value = '';
  }, 1000);
};

function handleDeleteItem(evt) {
  evt.preventDefault();

  const getIdItem = evt.path[2].value;
  db.del({
    getIdItem,
    urls,
    ViewUpdate,
    listUrl,
    setLocalStorage
  });
};

module.exports
