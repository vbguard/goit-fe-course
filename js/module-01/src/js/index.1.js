"use strict";

// -->Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   \\-->Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.
//   \\---->Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
//    \\    результат сохранить в переменную.
//   \\-->Необходимо проверить является ли введенные данные целым положительным числом.
//    \\ -->Вывести alert с текстом "Ошибка ввода" в случае ошибочного ввода и прекратить выполнение скрипта.
//     -->В случае валидного ввода, последовательно проверить кол-во мест в группах,
//        и кол-во необходимых мест введенных пользователем.
//        Подсказка: начните с самой маленькой группы!
//          --> Если была найдена группа в которой количество мест больше либо равно необходимому,
//              вывести пользователю сообщение через confirm, что есть место в группе такой-то,
//              согласен ли пользоваетель быть в этой группе?
//              --> Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
//              'Приятного путешествия в группе <имя группы>'.
//              --> Если ответ нет, выводим alert с текстом "Нам очень жаль, приходите еще!".
//          --> Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'
//      ***Задание повышеной сложности, выполнять по желанию***
//          --> Если была найдена группа в которой количество мест больше либо равно необходимому,
//              вывести пользователю сообщение через confirm, что есть место в группе такой-то,
//              согласен ли пользоваетель быть в этой группе?
//              -->Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
//                  'Приятного путешествия в группе <имя группы>'.
//              -->Если ответ нет, проверяем дальше и предлагаем следующую группу со свободными местами,
//                  если таковая будет найдена. Проверяем до тех пор, пока не проверим все 3 воможные группы.
//          --> Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'

// TourAgency Start reservation place
let welcomeMessage = confirm('Hello, Welcome to TourAgency. If you want to reserved a place please push OK ( Enter - in Win or Return - in mac). If you don\'t reserved place push Cancel or Esc - button on your keyboard');
if (welcomeMessage) {
  // We have 3 group with limited places
  let groupSharmPlaces = 15;
  let groupHurgadaPlaces = 25;
  let groupTabaPlaces = 6;
  // Max Number of places from all group Have
  let maxGroupPlaces = groupSharmPlaces + groupHurgadaPlaces + groupTabaPlaces;
  // Get number of places users want
  let userPlaces = prompt(`How much place you want to reserved? Max number of place ${maxGroupPlaces}`);
  // Validation for user input
  const isInRange = userPlaces >= 1;
  // не null
  const isNotNull = userPlaces !== null;
  // не NaN
  const isNumber = !Number.isNaN(userPlaces);
  // не null И число И в отрезке
  const isValidInput = isNotNull && isNumber && isInRange;

  console.log('isInRange: ' + isInRange);
  console.log('isNotNull: ' + isNotNull);
  console.log('isNumber: ' + isNumber);
  console.log('isValidInput: ' + isValidInput);
  console.log('userPlaces: ' + userPlaces);
  console.log('typeof userPlaces: ' + typeof userPlaces);

  if (isValidInput) {
    // When user input correct data, conduct checks on free space in group
    console.log('Yep!: ' + userPlaces);
    // If Validation input well done Get Number typeof Number
    let userNumPlaceDone = Number(userPlaces);
    console.log('Well Done user input data: ' + userNumPlaceDone + ' typeof: ' + typeof userNumPlaceDone);

    // if (userPlaces <= groupTabaPlaces) {
    //   let groupTabaConfirm = confirm(`In group Taba have a place you want. Confirm this?`);
    //   if (groupTabaConfirm) {
    //     alert(`Happy traveling in group ${group} `)
    //   }
    // }

    // Get Name of Group Choised
    let getNameGroup;
    switch (true) {
      case (userNumPlaceDone <= groupTabaPlaces):
        getNameGroup = 'Taba';
        break;
      case (userNumPlaceDone <= groupSharmPlaces):
        getNameGroup = 'Sharm';
        break;
      case (userNumPlaceDone <= groupHurgadaPlaces):
        getNameGroup = 'Hurgada';
        break;
      default:
        console.log('switch not work in Group choise Name: ' + getNameGroup);
    }
    console.log('getNameGroup: ' + getNameGroup);
    let userChoisedGroup;
    switch (true) {
      case (userNumPlaceDone <= groupTabaPlaces):
        userChoisedGroup = confirm(`In group ${getNameGroup} have a ${userPlaces} place. You'e confirm this or choise next group?`);
        if (userChoisedGroup) {
          alert(`Happy traveling in group ${getNameGroup}`);
          groupTabaPlaces = groupTabaPlaces - userNumPlaceDone;
          console.log('New data of place after resevation: ' + groupTabaPlaces);
        } else {
          console.log('after Cancel in Taba - choise next Group');
          switch (true) {
            case (userNumPlaceDone <= groupSharmPlaces):
              userChoisedGroup = confirm(`In group Sharm have a ${userPlaces} place. You'e confirm this or choise next group?`);
              if (userChoisedGroup) {
                alert(`Happy traveling in group Sharm`);
                groupSharmPlaces = groupSharmPlaces - userNumPlaceDone;
                console.log('New data of place after resevation: ' + groupSharmPlaces);
              } else {
                switch (true) {
                  case (userNumPlaceDone <= groupHurgadaPlaces):
                    userChoisedGroup = confirm(`In group Hurgada have a ${userPlaces} place. You'e confirm this choise or exit?`);
                    if (userChoisedGroup) {
                      alert(`Happy traveling in group Hurgada`);
                      groupHurgadaPlaces = groupHurgadaPlaces - userNumPlaceDone;
                      console.log('New data of place after resevation: ' + groupHurgadaPlaces);
                    } else {
                      alert('Нажаль ви невибрали нічого, Дякуємо. До зустрічі');
                    }
                    break;
                  default:
                    console.log('It\'s very well');
                }
              }
              break;
            default:
              console.log('some well))');
          }
        }
        console.log(userChoisedGroup);
        break;
      case (userNumPlaceDone <= groupSharmPlaces):
        userChoisedGroup = confirm(`In group ${getNameGroup} have a ${userPlaces} place. You'e confirm this or choise next group?`);
        if (userChoisedGroup) {
          alert(`Happy traveling in group ${getNameGroup}`);
          groupSharmPlaces = groupSharmPlaces - userNumPlaceDone;
          console.log('New data of place after resevation: ' + groupSharmPlaces);
        } else {
          switch (true) {
            case (userNumPlaceDone <= groupHurgadaPlaces):
              userChoisedGroup = confirm(`In group Hurgada have a ${userPlaces} place. You'e confirm this choise or exit?`);
              if (userChoisedGroup) {
                alert(`Happy traveling in group Hurgada`);
                groupHurgadaPlaces = groupHurgadaPlaces - userNumPlaceDone;
                console.log('New data of place after resevation: ' + groupHurgadaPlaces);
              } else {
                alert('Нажаль ви невибрали нічого, Дякуємо. До зустрічі');
              }
              break;
            default:
              console.log('It\'s very well');
          }
        }
        break;
      case (userNumPlaceDone <= groupHurgadaPlaces):
        userChoisedGroup = confirm(`In group ${getNameGroup} have a ${userPlaces} place. You'e confirm this choise or exit?`);
        if (userChoisedGroup) {
          alert(`Happy traveling in group ${getNameGroup}`);
          groupHurgadaPlaces = groupHurgadaPlaces - userNumPlaceDone;
          console.log('New data of place after resevation: ' + groupHurgadaPlaces);
        } else {
          alert('Нажаль ви невибрали нічого, Дякуємо. До зустрічі');
        }
        break;
      case (userNumPlaceDone <= maxGroupPlaces):
        userChoisedGroup = confirm(`In all group have a ${userPlaces} places. You'e confirm this?`);
        if (userChoisedGroup) {
          alert(`Happy traveling in group Taba:${groupTabaPlaces}, Sharm:  `);
          maxGroupPlaces = maxGroupPlaces - userNumPlaceDone;
          console.log('New data of place after resevation: ' + maxGroupPlaces);
        } else {
          alert('Sorry, to see you latter');
        }
        break;
      default:
        console.log('Hmm... something went wrong ;)');
    }


    if (userPlaces >= 47) {
      let dataBigger = confirm(`Вибачте але на таку кількість осіб немає вільних місць. У нас вільних місць залишилось ${maxGroupPlaces}`);
      if (dataBigger) {
        document.location.reload(true);
      } else {
        alert('Thanks, Goodbay!');
      }
    }
  } else {
    // If user input incorect data we get alert after sending for user confirm data
    alert(`Sorry, you wasn\'t input a number of place can reserved. Or input incorrect Data (latter or number not include in range from 1 to ${maxGroupPlaces}. You can true again`);
    let userReactOnInData = confirm('You are really want to continuies plese push Enter or OK. If you are not continiues push Cancel or ESC');
    if (userReactOnInData) {
      document.location.reload(true);
    } else {
      alert('Дякуємо. Допобачення!!!');
    }
  }
} else {
  alert('Дякуємо, що відвідали нашу сторінку. До Зустрічі');
}
