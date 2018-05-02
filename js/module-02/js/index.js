let userInput;
const numbers = [];
let total = 0;
let isValidInput;

do {
  userInput = prompt('Введіть будьласка число :first', '');
  let counter = 0;
  let isNumber = !isNaN(Number(userInput));
  let isEmptyInput = userInput === '';
  let isCancel = userInput === null;

  if (isCancel) {
    break;
  }

  if (isEmptyInput || !isNumber) {
    alert('Было введено не число, попробуйте еще раз : first');

    do {
      userInput = prompt('Введіть будьласка число :second', '');
      let isNumber = !isNaN(Number(userInput));
      let isEmptyInput = userInput === '';
      let isCancel = userInput === null;

      if (isCancel) {
        break;
      }

      if (isEmptyInput || !isNumber) {
        alert('Было введено не число, попробуйте еще раз : second');
      }
    } while (!isNumber || !isEmptyInput);
  }

  numbers.push(Number(userInput));
} while (true);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
  console.log('Сумма: ' + total);
}
