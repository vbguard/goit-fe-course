'use strict';
import axios from 'axios';

const API_KEY = '5b50c178979045e4507c81f1110cd99f1dc04cae81ff5';

export function linkviewAPI(url, postDataToDB) {
  console.log(url);
  console.log(postDataToDB);
axios.get(`http://api.linkpreview.net/?key=${API_KEY}&q=${url}`)
  .then(response => {
    console.log(response);
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

