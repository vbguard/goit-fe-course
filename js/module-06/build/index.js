'use strict';

var _Hamburger$SIZES, _Hamburger$STUFFINGS, _Hamburger$TOPPINGS;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamburger = function () {
  function Hamburger(_ref) {
    var size = _ref.size,
        stuffing = _ref.stuffing;

    _classCallCheck(this, Hamburger);

    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  _createClass(Hamburger, [{
    key: 'addTopping',
    value: function addTopping(topping) {
      if (this.toppings.length > 0) {
        this.toppings.includes(topping) ? console.log('you want add ' + topping + ' his we Have') : this.toppings.push(topping);
      }

      if (this.toppings.length === 0) {
        this.toppings.push(topping);
      }
    }
  }, {
    key: 'removeTopping',
    value: function removeTopping(topping) {
      this.toppings = this.toppings.filter(function (key) {
        return key !== topping;
      });
    }
  }, {
    key: 'getToppings',
    value: function getToppings() {
      return this.toppings;
    }
  }, {
    key: 'getSize',
    value: function getSize() {
      return this.size;
    }
  }, {
    key: 'getStuffing',
    value: function getStuffing() {
      return this.stuffing;
    }
  }, {
    key: 'calculatePrice',
    value: function calculatePrice() {
      var totalPrice = 0;
      var getTotalToppingsPrice = this.toppings.reduce(function (acc, value) {
        return acc + Hamburger.TOPPINGS[value].price;
      }, 0);
      totalPrice = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + getTotalToppingsPrice;

      return totalPrice;
    }
  }, {
    key: 'calculateCalories',
    value: function calculateCalories() {
      var totalCalories = 0;
      var getTotalToppingsCalories = this.toppings.reduce(function (acc, value) {
        return acc + Hamburger.TOPPINGS[value].calories;
      }, 0);
      totalCalories = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + getTotalToppingsCalories;

      return totalCalories;
    }
  }]);

  return Hamburger;
}();

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = (_Hamburger$SIZES = {}, _defineProperty(_Hamburger$SIZES, Hamburger.SIZE_SMALL, {
  price: 30,
  calories: 50
}), _defineProperty(_Hamburger$SIZES, Hamburger.SIZE_LARGE, {
  price: 50,
  calories: 100
}), _Hamburger$SIZES);
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.STUFFINGS = (_Hamburger$STUFFINGS = {}, _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_CHEESE, {
  price: 15,
  calories: 20
}), _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_SALAD, {
  price: 20,
  calories: 5
}), _defineProperty(_Hamburger$STUFFINGS, Hamburger.STUFFING_MEAT, {
  price: 35,
  calories: 15
}), _Hamburger$STUFFINGS);
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = (_Hamburger$TOPPINGS = {}, _defineProperty(_Hamburger$TOPPINGS, Hamburger.TOPPING_SPICE, {
  price: 10,
  calories: 0
}), _defineProperty(_Hamburger$TOPPINGS, Hamburger.TOPPING_SAUCE, {
  price: 15,
  calories: 5
}), _Hamburger$TOPPINGS);


var hamburger = new Hamburger({
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