'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;

  let totalPrice = 0;
  let changeAmount = 0;
  let customerMoney = 0;

  this.countTotalPrice = function () {
    for (const key in products) {
      if (products.hasOwnProperty(key)) {
        const productsKeys = key;
        const productsElement = products[key];
        for (const key in order) {
          if (order.hasOwnProperty(key)) {
            const orderKeys = key;
            const elementFromOrder = order[key];
            if (productsKeys === orderKeys) {
              const getSummOrderProducts = productsElement * elementFromOrder;
              totalPrice += getSummOrderProducts;
            }
          }
        }
      }
    }
    return totalPrice;
  };
  this.getCustomerMoney = function () {
    do {
      customerMoney = prompt(`Загальна сумма ${totalPrice}, скільки грошей ви даєте?`, '');
      const isInRange = totalPrice <= Number(customerMoney);
      const isNumber = !Number.isNaN(Number(customerMoney));
      let isValidInput = isInRange && isNumber;
      if (customerMoney === null) {
        return null
      };
      if (isValidInput) {
        customerMoney = Number(customerMoney);
        break;
      }
    } while (true);

    return customerMoney;
  };
  this.countChange = function () {
    console.log(customerMoney);
    console.log(totalPrice);
    const changeCustomerShop = customerMoney - totalPrice;
    return changeAmount = changeCustomerShop;
  };
  this.reset = function () {
    if (totalPrice > 0) {
      totalPrice = 0;
    };
    if (customerMoney > 0) {
      customerMoney = 0;
    };
    if (changeAmount > 0) {
      changeAmount = 0
    };
  };
  this.serve = function (order) {
    this.countTotalPrice(order);
    if (this.getCustomerMoney() === null) {
      this.reset();
      return alert('Очень жаль, что-то пошло не так, приходите еще');
    }
    this.countChange();
    alert(`Спасибо за покупку, ваша сдача ${changeAmount}`);
    this.reset();
  };
};

const order = {
  bread: 2,
  milk: 4,
  apples: 1,
  cheese: 3
};

const order2 = {
  bread: 2,
  milk: 4,
  apples: 1,
  cheese: 3
};

const cashier = new Cashier('Mango', products);
cashier.serve(order);
const cashier2 = new Cashier('Tago', products);
cashier2.serve(order);
