'use strict';

let groupSharmPlaces = 15;
let groupHurgadaPlaces = 25;
let groupTabaPlaces = 6;

let reservingConfirm = confirm(
  "Hello, Welcome to TourAgency. If you want to reserved a place please push OK ( Enter - in Win or Return - in mac). If you don't reserved place push Cancel or Esc - button on your keyboard",
);

if (reservingConfirm) {
  let userPlaces = prompt(
    `How much place you want to reserved? Max number of place ${Math.max(
      groupSharmPlaces,
      groupHurgadaPlaces,
      groupTabaPlaces
    )}`,
  );
  const isInRange = userPlaces >= 1;
  const isNotNull = userPlaces !== null;
  const isNumber = !Number.isNaN(userPlaces);
  const isValidInput = isNotNull && isNumber && isInRange;

  if (isValidInput) {
    userPlaces = Number(userPlaces);
    // Get Name of Group Choice
    let groupName;
    let userChoiceGroup;
    if (userPlaces <= groupTabaPlaces) {
      groupName = 'Taba';
      userChoiceGroup = confirm(
        `In group ${groupName} have a ${userPlaces} place. You're confirm this or choice next group?`
      );
      if (userChoiceGroup) {
        alert(`Happy traveling in group ${groupName}`);
        groupTabaPlaces = groupTabaPlaces - userPlaces;
        console.log('New data of place after reservation: ' + groupTabaPlaces);
      } else {
        console.log('after Cancel in Taba - choice next Group');
        userChoiceGroup = confirm(
          `In group Sharm have a ${userPlaces} place. You're confirm this or choice next group?`
        );
        if (userChoiceGroup) {
          alert(`Happy traveling in group Sharm`);
          groupSharmPlaces = groupSharmPlaces - userPlaces;
          console.log(
            'New data of place after reservation: ' + groupSharmPlaces,
          );
        } else {
          userChoiceGroup = confirm(
            `In group Hurgada have a ${userPlaces} place. You're confirm this choice or exit?`
          );
          if (userChoiceGroup) {
            alert(`Happy traveling in group Hurgada`);
            groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
            console.log(
              'New data of place after reservation: ' + groupHurgadaPlaces,
            );
          } else {
            alert('We are sorry, but you do not choice any thing. Bye');
          }
        }
      }
    } else if (userPlaces <= groupSharmPlaces) {
      groupName = 'Sharm';
      userChoiceGroup = confirm(
        `In group ${groupName} have a ${userPlaces} place. You're confirm this or choice next group?`
      );
      if (userChoiceGroup) {
        alert(`Happy traveling in group ${groupName}`);
        groupSharmPlaces = groupSharmPlaces - userPlaces;
        console.log('New data of place after reservation: ' + groupSharmPlaces);
      } else {
        userChoiceGroup = confirm(
          `In group Hurgada have a ${userPlaces} place. You're confirm this choice or exit?`
        );
        if (userChoiceGroup) {
          alert(`Happy traveling in group Hurgada`);
          groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
          console.log(
            'New data of place after reservation: ' + groupHurgadaPlaces,
          );
        } else {
          alert('We are sorry, but you do not choice any thing. Bye');
        }
      }
    } else if (userPlaces <= groupHurgadaPlaces) {
      userChoiceGroup = confirm(
        `In group ${groupName} have a ${userPlaces} place. You're confirm this choice or exit?`
      );
      if (userChoiceGroup) {
        alert(`Happy traveling in group ${groupName}`);
        groupHurgadaPlaces = groupHurgadaPlaces - userPlaces;
        console.log(
          'New data of place after reservation: ' + groupHurgadaPlaces,
        );
      } else {
        alert('We are sorry, but you do not choice any thing. Bye');
      }
    } else {
      alert('Sorry we have not places');
    }
  } else {
    // If user input incorrect data we get alert after sending for user confirm data
    alert(
      `Sorry, you wasn't input a number of place can reserved. Or input incorrect Data (latter or number not include in range from 1 to ${Math.max(
        groupSharmPlaces,
        groupHurgadaPlaces,
        groupTabaPlaces
      )}. You can true again`
    );
    let userReactOnInData = confirm(
      'You are really want to continuies plese push Enter or OK. If you are not continiues push Cancel or ESC'
    );
    if (userReactOnInData) {
      document.location.reload(true);
    } else {
      alert('Thanks. GoodBye!!!');
    }
  }
} else {
  alert('Thanks for visit ours pages. See you Next time');
}
