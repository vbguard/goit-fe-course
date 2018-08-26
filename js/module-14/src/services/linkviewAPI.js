import axios from 'axios';

// const API_KEY = process.env.LINKVIEW_API_KEY;
const API_KEY = '5b50c178979045e4507c81f1110cd99f1dc04cae81ff5';

const get = value => {
  const data = axios
    .get(`https://api.linkpreview.net/?key=${API_KEY}&q=${value}`)
    .then(response => response.data)
    // eslint-disable-next-line
    .catch(err => console.log(err));
  return data;
};

export default get;
