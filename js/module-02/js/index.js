let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введіть будьласка число', '');
  let counter = 0;
  let isNumber = !isNaN(Number(userInput));
  let isEmptyInput = userInput === '';
  let isCancel = userInput === null;
  if (isCancel) {
    break;
  }
  if (isEmptyInput || !isNumber) {
    alert('Было введено не число, попробуйте еще раз');
    userInput = prompt('Введіть будьласка число', '');
    if (isCancel) {
      break;
    }
  }
  if (isNumber && !isCancel && !isEmptyInput) {
    numbers.push(Number(userInput));
  }
} while (true);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
  console.log('Сумма: ' + total);
}
