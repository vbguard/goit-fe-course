import axios from 'axios';
import { set } from '../services/database';
const API_KEY = '5b50c178979045e4507c81f1110cd99f1dc04cae81ff5';

const LinkView = ({userUrl, listUrl, urls, ViewUpdate, setLocalStorage}) => {

  axios.get(`http://api.linkpreview.net/?key=${API_KEY}&q=${userUrl}`)
    .then(response => {
      const data = {
        title: response.data.title,
        image: response.data.image,
        url: response.data.url,
        description: response.data.description
      };
      set({data, listUrl, urls, ViewUpdate, setLocalStorage});
    })
    .catch(err => console.log(err));
};

export default LinkView;
