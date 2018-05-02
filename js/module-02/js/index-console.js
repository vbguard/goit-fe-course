let userInput;
const numbers = [];
let total = 0;
let isValidInput;

do {
  userInput = prompt('Введіть будьласка число :first', '');
  let counter = 0;
  const isNumber = !isNaN(Number(userInput));
  const isEmptyInput = userInput === '';
  const isCancel = userInput === null;

  if (isCancel) {
    break;
  }
  console.log(`userInput-first ${counter += 1} : ${userInput}`);
  console.log(`isNumber: ${isNumber}`);
  console.log(`isEmptyInput: ${isEmptyInput}`);
  console.log(`isCancel ${isCancel}`);
  if (isEmptyInput || !isNumber) {
    alert('Было введено не число, попробуйте еще раз : first');
    console.log(`isNumber-f-wrong: ${isNumber}`);
    console.log(`isEmptyInput-f-wrong: ${isEmptyInput}`);
    console.log(`isCancel-f-wrong: ${isCancel}`);
    do {
        userInput = prompt('Введіть будьласка число :second', '');
      const isNumber = !isNaN(Number(userInput));
      const isEmptyInput = userInput === '';
      const isCancel = userInput === null;

      console.log(`userInput-second ${counter += 1} : ${userInput}`);
      console.log(`isNumber-s-wrong: ${isNumber}`);
      console.log(`isEmptyInput-s-wrong: ${isEmptyInput}`);
      console.log(`isCancel-s-wrong: ${isCancel}`);

      if (isCancel) {
        break;
      }

      if ( isEmptyInput || !isNumber ) {
        alert('Было введено не число, попробуйте еще раз : second');
      }
    } while (!isNumber || !isEmptyInput || !isCancel);
  }

  numbers.push(Number(userInput));
} while (true);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }

  console.log('Сумма: ' + total);
}
