import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBONmGMe96O7RpMxDmbAu-UOzUERaUO8Po",
  authDomain: "goit-fe-1517235319053.firebaseapp.com",
  databaseURL: "https://goit-fe-1517235319053.firebaseio.com",
  projectId: "goit-fe-1517235319053",
  storageBucket: "goit-fe-1517235319053.appspot.com",
  messagingSenderId: "906837637174"
}

firebase.initializeApp(config);
const dbc = firebase.firestore().collection('bookmarks');

export const set = ({data, listUrl, urls, ViewUpdate, setLocalStorage}) => {
  console.log(data);
  dbc.add(data)
    .then(function () {
      console.log("Document successfully written!");
       get({urls, ViewUpdate, listUrl, setLocalStorage });
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export const get = ({ urls, ViewUpdate, listUrl, setLocalStorage }) => {
  dbc.get().then((querySnapshot) => {
    urls.bookmarks = [];
    querySnapshot.forEach((doc) => {
      const url = {
        id: doc.id,
        description: doc.data().description,
        title: doc.data().title,
        image: doc.data().image,
        url: doc.data().url
      }
      urls.bookmarks.push(url);
    });
    ViewUpdate(urls.bookmarks, listUrl);
    setLocalStorage();
  });
};

export const del = ({getIdItem, urls, ViewUpdate, listUrl, setLocalStorage }) => {
  dbc.doc(getIdItem).delete().then(function () {
    console.log("Document successfully deleted!");
    get({urls, ViewUpdate, listUrl, setLocalStorage});
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}
