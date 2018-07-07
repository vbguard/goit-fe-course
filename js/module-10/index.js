'use strict';
const apiUrl = 'https://test-users-api.herokuapp.com/users/';

const getAllBtn = document.querySelector('.js-button-getall');
const getAllResult = document.querySelector('.js-result-getall-list');

getAllBtn.addEventListener('click', handleSubmitGetAll);

function handleSubmitGetAll(e) {
  e.preventDefault();
  fetchGetAllUser(e).then(addDataToList);
}

function fetchGetAllUser(param) {
  return fetch(apiUrl).then(response => {
    if (response.ok) return response.json();
  }).then(data => data.data).catch(err => console.log(err));
}

function addDataToList(value) {
  value.forEach(user => {
    createTemplate(user);
  });
}

function createTemplate({
  id,
  name,
  age
}) {
  const item = document.createElement('li');
  const userId = document.createElement('h5');
  const userName = document.createElement('h6');
  const userAge = document.createElement('h6');

  userId.textContent = `id: ${id}`;
  userName.textContent = `name: ${name}`;
  userAge.textContent = `age: ${age}`;

  item.append(userId, userName, userAge);
  getAllResult.insertAdjacentElement('beforeend', item);
}

const inputById = document.querySelector('.js-input-byid');
const btnById = document.querySelector('.js-button-byid');
const resultById = document.querySelector('.js-result-getuser');

btnById.addEventListener('click', handleSubmitById);

function handleSubmitById(e) {
  e.preventDefault();
  fetchGetAllUser(e).then(getUserById);
}

function getUserById(value) {
  let userDataFind;
  // const inputValueById = inputById.value;
  const getUser = value.filter(ifIdInDB)[0];
  addToResultDiv(getUser);
}

function ifIdInDB(value) {
  const inputValueById = inputById.value;
  if (value.id === inputValueById) return value;
}

function addToResultDiv(value) {
  const userName = document.createElement('p');
  const userId = document.createElement('p');
  const userAge = document.createElement('p');

  userName.textContent = `name: ${value.name}`;
  userAge.textContent = `age: ${value.age}`;
  userId.textContent = `id: ${value.id}`;

  resultById.append(userId, userName, userAge);
}

const inputAddUserName = document.querySelector('.js-inputaddname');
const inputAddUserAge = document.querySelector('.js-inputaddage');
const btnAddUser = document.querySelector('.js-button-adduser');

btnAddUser.addEventListener('click', handleSubmitAddUser);

function handleSubmitAddUser(e) {
  e.preventDefault();
  const inputValueName = inputAddUserName.value;
  const inputValueAge = inputAddUserAge.value;

  const option = {
    method: 'POST',
    body: JSON.stringify({
      name: inputValueName,
      age: inputValueAge
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  inputAddUserAge.value = '';
  inputAddUserName.value = '';
  fetchAddUser(e, option).then(data => alert(`User Add'ed`))
}

function fetchAddUser(param, apiOption) {
  return fetch(apiUrl, apiOption).then(response => {
    console.log('before if: ', response);
    if (response.ok) {
      return response.json();
    }
    throw Error('Error while fetching' + response.statusText);
  }).catch(err => console.log(err));
}

const btnRemoveUser = document.querySelector('.js-button-remove');
const inputRemove = document.querySelector('.js-input-remove');

btnRemoveUser.addEventListener('click', handleSubmitRemove);

function handleSubmitRemove(e) {
  e.preventDefault();

  const inputValueRemoveUserId = inputRemove.value;

  fetchRemoveUser(e, inputValueRemoveUserId).then(data => {
    console.log(data.data);
    alert('User has been DELETE from DB');
  });
}
function fetchRemoveUser(param, id) {
  return fetch(apiUrl + id, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error' + response.statusText);
  }).catch(err => console.log(err));
}

const btnUpdateUser = document.querySelector('.js-button-update');
const inputUpdateName = document.querySelector('.js-input-update-name');
const inputUpdateAge = document.querySelector('.js-input-update-age');
const inputUpdateId = document.querySelector('.js-input-update-id');

btnUpdateUser.addEventListener('click', handleSubmitUpdateUser);

function handleSubmitUpdateUser(e) {
  e.preventDefault();

  const inputValueUpdateUserId = inputUpdateId.value;
  const newUserName = inputUpdateName.value;
  const newUserAge = inputUpdateAge.value;

  fetchUpdateUser(e, inputValueUpdateUserId, newUserName, newUserAge).then(alert('User Data Update!'));
}
function fetchUpdateUser(param, id, name, age) {
  return fetch(apiUrl + id, {
    method: 'PUT',
    body: JSON.stringify({ name: name, age: age}),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then( response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error' + response.statusText);
      }
    )
    .catch(err => console.log(err));
}
