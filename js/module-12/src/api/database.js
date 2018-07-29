'use strict';
import axios from 'axios';

const url = 'http://5.58.94.188:3000/bookmarks';
export function dbPost(data) {
  axios.post(url, data);
};

export function dbGetAll() {
  axios.get(url)
  .then(
    res => {
      console.log('in database file: ',res);
      return (res.data);
    }
  ).catch(
    err => {
      console.log(err);
    })
}
