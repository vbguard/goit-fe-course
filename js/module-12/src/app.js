'use strict';
import './styles.css';
import axios from 'axios';
import listUrlItemTpl from './template/list-url-item.hbs';
// import { linkviewAPI } from './api/linkview';
// import { dbPost, dbGetAll } from './api/database';

const listUrl = document.querySelector('.js-url-list');
const form = document.querySelector('.js-form');

const dbUrl = 'http://5.58.94.188:3000/bookmarks';
const API_KEY = '5b50c178979045e4507c81f1110cd99f1dc04cae81ff5';
const urls = {bookmarks: []};
let filtredUrls = [];
let idUrlUserAdd;

// API requests

function linkviewAPI(url, postDataToDB) {
  axios.get(`https://api.linkpreview.net/?key=${API_KEY}&q=${url}`)
    .then(response => {
      console.log('start request to lunkview: ', response);
      const data = {
        title: response.data.title,
        image: response.data.image,
        url: response.data.url,
        description: response.data.description
      }
      postDataToDB(data);
    })
    .catch(err => console.log(err));
};

function dbPost(data) {
  axios.post(dbUrl, data)
    .then(res => {
      idUrlUserAdd = res.data.createdProduct._id;
      console.log('data in send DB: ', res);
    });
};

function dbDelete(id) {
  console.log('irl delete id: ', id);
  axios.delete(dbUrl + '/' + id).then(res => {
    urls.bookmarks.filter(url => url._id !== id);
    console.log('post deleted from DB: ', res);
  });
}

function dbGetAll() {
  axios.get(dbUrl)
    .then(
      res => {
        const dbData = res.data;
        urls.bookmarks.push(...dbData);
        urls.bookmarks.reverse();
        console.log('firstLoad Urls from DB: ', urls.bookmarks);
        localStorage.setItem('urls', JSON.stringify(urls.bookmarks));
      }
    ).catch(
      err => {
        console.log(err);
      })
}

function dbGetNew() {
  axios.get(dbUrl)
    .then(
      res => {
        updateView(res.data.reverse());
        urls.bookmarks = [];
        urls.bookmarks = res.data.reverse();
        console.log('new Data Income file: ', res);
      }
    ).catch(
      err => {
        console.log(err);
      });
};

// First Page Load

(function firstPageLoad() {
  dbGetAll();
  const bookmarksStorage = JSON.parse(localStorage.getItem('urls'));
  const markup = bookmarksStorage.reduce((markup, bookmark) =>
    markup + listUrlItemTpl(bookmark), '');
  listUrl.insertAdjacentHTML('afterbegin', markup);
})();

// After Page loaded Manipulation
function updateView(bookmarks) {
  const markup = String(bookmarks.reduce((markup, bookmark) =>
    markup + listUrlItemTpl(bookmark), ''));

  listUrl.innerHTML = markup;
};

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const userUrl = evt.target[0].value;

  linkviewAPI(userUrl, dbPost);
  setTimeout(()=>dbGetNew(), 1000);
};

listUrl.addEventListener('click', handleDeleteItem);

function handleDeleteItem(evt) {
  evt.preventDefault();

  const getIdforDeteleItem = evt.path[2].value;
  console.log(getIdforDeteleItem);
  console.log(evt.path);
  if (getIdforDeteleItem !== undefined) {
    //remove from DB
    dbDelete(getIdforDeteleItem);
    //filrted urls

  }

  console.log('click delete item new Arr: ', urls.bookmarks);
  //update localStorage from DB
  localStorage.setItem('urls', JSON.stringify(urls.bookmarks));
  // Update List
  updateView(urls.bookmarks);
};
