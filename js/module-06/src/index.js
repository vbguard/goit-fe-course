
class Hamburger {
  constructor({
    size,
    stuffing
  }) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  };

  static SIZE_SMALL = 'SIZE_SMALL';
  static SIZE_LARGE = 'SIZE_LARGE';
  static SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    },
  };

  static STUFFING_CHEESE = 'STUFFING_CHEESE';
  static STUFFING_SALAD = 'STUFFING_SALAD';
  static STUFFING_MEAT = 'STUFFING_MEAT';

  static STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15,
    },
  };

  static TOPPING_SPICE = 'TOPPING_SPICE';
  static TOPPING_SAUCE = 'TOPPING_SAUCE';

  static TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    },
  };

  addTopping = function (topping) {
    if (this.toppings.length === 0) {
      return this.toppings.push(topping);
    }

    return this.toppings.filter(key => key !== topping ? this.toppings.push(topping) : console.log(`you want add topping his we Have`));

  }

  removeTopping = function (topping) {
    if (this.toppings.length === 0) {
      return console.log('Nozing remove, fist add you topping');
    }

    return this.toppings = this.toppings.filter(key => key !== topping);
  }

  getToppings = function () {
    return this.toppings;
  }

  getSize = function () {
    return this.size;
  }

  getStuffing = function () {
    return this.stuffing;
  }

  calculatePrice = function () {
    let totalPrice = 0;
    let totalToppingsPrice = 0;
    const getToppingsValuePrice = this.toppings.filter(value => totalToppingsPrice += Hamburger.TOPPINGS[value].price);
    totalPrice += Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalToppingsPrice;

    return totalPrice;
  }

  calculateCalories = function () {
    let totalCalories = 0;
    let totalToppingsCalories = 0;
    const getToppingsValueCalories = this.toppings.filter(value => totalToppingsCalories += Hamburger.TOPPINGS[value].price);
    totalCalories += Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + totalToppingsCalories;

    return totalCalories;
  }
}

const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
