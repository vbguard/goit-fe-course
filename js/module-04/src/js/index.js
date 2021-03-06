'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25,
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;

  this.totalPrice = 0;
  this.changeAmount = 0;
  this.customerMoney = 0;

  this.countTotalPrice = function(order) {
    this.order = order;

    const keys = Object.keys(order);
    for (let key of keys) {
      this.totalPrice += this.order[key] * this.products[key];
    }
  };

  this.getCustomerMoney = function() {

    do {
      this.customerMoney = prompt(
        `Вас вітає касир ${this.name}. Загальна сумма ${
          this.totalPrice
        }, скільки грошей ви даєте?`,
        '',
      );

      const isInRange = this.totalPrice <= Number(this.customerMoney);
      const isNumber = !Number.isNaN(Number(this.customerMoney));
      let isValidInput = isInRange && isNumber;

      if (this.customerMoney === null) {
        return null;
      }

      if (isValidInput) {
        this.customerMoney = Number(this.customerMoney);
        break;
      }
    } while (true);
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = function(order) {
    this.order = order;
    this.countTotalPrice(this.order);
    this.getCustomerMoney();

    if (this.customerMoney === null) {
      this.reset();
      alert('Очень жаль, что-то пошло не так, приходите еще');
      return null;
    }

    this.countChange();
    alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    this.reset();
  };
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};

const order2 = {
  bread: 1,
  milk: 1,
  apples: 1,
};

const cashier = new Cashier('Mango', products);
cashier.serve(order);

// const cashier2 = new Cashier('Tago', products);
// cashier2.serve(order2);
