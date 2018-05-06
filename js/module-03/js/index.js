const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Please input your login ;)', '');

function checkLoginValidity() {
  const max = '16';
  const min = '4';
  const lengthLoginInput = login.length;
  let loginLengthValid = lengthLoginInput >= min && lengthLoginInput <= max;
  if (!loginLengthValid) {
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  return loginLengthValid; // If input data length in 4 to 16 return TRUE if smaller or biggest return FALSE
}

function checkIfLoginExists() {
  const ifLoginInArray = logins.includes(login);
  console.log(logins.includes(login));
  if (ifLoginInArray) {
    alert('Такой логин уже используется!');
  }
  return ifLoginInArray;
}

function addLogin() {
  if (checkLoginValidity(login)) {
    console.log(logins);
    if (checkIfLoginExists(logins, login)) {
      alert('Такой логин уже используется!');
    } else {
      alert('Логин успешно добавлен!');
      logins.push('login');
    }
  }
};
addLogin(logins, login);
console.log(logins);
