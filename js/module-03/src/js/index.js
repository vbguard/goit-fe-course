'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Please input your login ;)', '');

function checkLoginValidity() {
  const max = '16';
  const min = '4';
  const lengthLoginInput = login.length;
  let loginLengthValid = lengthLoginInput >= min && lengthLoginInput <= max;
  return loginLengthValid; // If input data length in 4 to 16 return TRUE if smaller or biggest return FALSE
}

function checkIfLoginExists() {
  const ifLoginInArray = logins.includes(login);
  return ifLoginInArray;
}

function addLogin() {
  if (!checkLoginValidity(login)) {
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }

  if (checkIfLoginExists(logins, login)) {
    return alert('Такой логин уже используется!');
  }

  logins.push(login);
  alert('Логин успешно добавлен!');
};

addLogin(logins, login);
