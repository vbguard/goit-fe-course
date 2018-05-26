/*
  Сеть фастфудов предлагает несколько видов гамбургеров.

  Типы начинок и размеры надо сделать константами. Никаких магических строк
  и чисел быть не должно.
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера.
  Используте ООП подход, создайте класс Hamburger, константы, методы
  для выбора опций и рассчета нужных величин.
  Класс Hamburger, получает на вход информацию о гамбургере, а на выходе
  дает информацию о каллориях и цене. Никакого взаимодействия с пользователем
  и внешним миром класс делать не должен - все нужные данные ему передают явно
  в виде аргументов при создании экземпляра.
  Почему? Потому что каждый должен заниматься своим делом, класс должен только
  рассчитывать результирующий гамбургер, а вводом-выводом пусть занимается
  внешний, относительно него, код. Такой класс унивесален: можно использовать его
  выводя данные через console.log, а можно создать интерфейс с кнопками и полями ввода.
  Именно в таком стиле необходимо писать код, тем самым достигая универсальности
  и возможности повторного использования.
  Написанный класс должен соответствовать следующему jsDoc описанию функции-конструктора.
  Вам необходимо написать используя синтаксис ES6 class. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании (только в доп. задании)
 */
// function Hamburger({ size, stuffing }) { ... }

class Hamburger {
  constructor({
    size,
    stuffing
  }) {
    /**
     * Класс, объекты которого описывают параметры гамбургера.
     *
     * @constructor
     * @param size        Размер
     * @param stuffing    Начинка
     * @throws {HamburgerException}  При неправильном использовании (только в доп. задании)
     */
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  };

  /* Размеры, виды начинок и добавок добавить как статические свойства класса. К примеру: */

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
  /**
   * Добавить topping к гамбургеру. Можно добавить несколько
   * topping, при условии, что они разные.
   *
   * @param topping  Тип добавки
   * @throws {HamburgerException}	При неправильном использовании (только в доп. задании)
   */
  addTopping = function (topping) {
    if (this.toppings.length === 0) {
      return this.toppings.push(topping);
    }

    return this.toppings.filter(key => key !== topping ? this.toppings.push(topping) : console.log(`you want add topping his we Have`));

  }

  /**
   * Убрать topping, при условии, что она ранее была
   * добавлена.
   *
   * @param topping  Тип добавки
   * @throws {HamburgerException}  При неправильном использовании (только в доп. задании)
   */
  removeTopping = function (topping) {
    if (this.toppings.length === 0) {
      return console.log('Nozing remove, fist add you topping');
    }

    return this.toppings = this.toppings.filter(key => key !== topping);
  }

  /**
   * Получить список toppings
   *
   * @return {Array} Массив добавленных topping, содержит значения констант
   *                 Hamburger.TOPPING_*
   */
  getToppings = function () {
    return this.toppings;
  }

  /**
   * Узнать размер гамбургера
   */
  getSize = function () {
    return this.size;
  }

  /**
   * Узнать начинку гамбургера
   */
  getStuffing = function () {
    return this.stuffing;
  }

  /**
   * Узнать цену гамбургера
   * @return {Number} Цена в деньгах
   */
  calculatePrice = function () {
    let totalPrice = 0;
    let totalToppingsPrice = 0;
    const getToppingsValuePrice = this.toppings.filter(value => totalToppingsPrice += Hamburger.TOPPINGS[value].price);
    totalPrice += Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + totalToppingsPrice;

    return totalPrice;
  }

  /**
   * Узнать калорийность
   * @return {Number} Калорийность в калориях
   */
  calculateCalories = function () {
    let totalCalories = 0;
    let totalToppingsCalories = 0;
    const getToppingsValueCalories = this.toppings.filter(value => totalToppingsCalories += Hamburger.TOPPINGS[value].price);
    totalCalories += Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + totalToppingsCalories;

    return totalCalories;
  }
}

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});
console.log(hamburger);
console.log('hamburger size data arg input: ', hamburger.size);
console.log('hamburger stuffing data arg input: ', hamburger.stuffing);

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

/*
  Обратите внимание в коде выше на такие моменты:
    - класс не взаимодействует с внешним миром. Это не его дело, этим занимается другой код,
    	а класс живет в изоляции от мира

    - обязательные параметры (размер и начинка) мы передаем через конструктор,
    	чтобы нельзя было создать объект, не указав их

    - необязательные (добавка) добавляем через методы
    - имена методов начинаются с глагола и имеют вид «сделайЧтоТо»: calculateCalories(), addTopping()

    - типы начинок обозначены "константами" с понятными именами (на самом деле просто свойствами,
      	написанным заглавными буквами, которые мы договорились считать "константами")

    - объект создается через конструктор - функцию, которая задает начальные значения полей.
      	Имя конструктора пишется с большой буквы и обычно является существительным: new Hamburger(...)

    - "константы" вроде могут иметь значение, являющееся строкой или числом. От смены значения константы
      ничего не должно меняться (то есть эти значения не должны где-то еще быть записаны).

    - в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории логично
      в тот момент, когда это потребуется, а не заранее.

  При решении задачи в ООП стиле, необходимо ответить на вопросы:
    - какие есть сущности, для которых мы сделаем классы? (Гамбургер).
    - какие у них есть свойства (размер, начинка, добавки). Цена или калории не являются свойствами так
      как они вычисляются из других свойств и хранить их не надо.
    - что мы хотим от них получить (какие у них должны быть методы). Например, сколько стоит гамбургер?
    - как сущности связаны? У нас одна сущность «Гамбургер» и она ни с чем не связана.
*/

/*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***

  Код должен быть защищен от ошибок. Представьте, что классом будет
  пользоваться другой программист. Если он передает неправильный тип
  гамбургера, например, или неправильный вид добавки, должно выбрасываться
  исключение (ошибка не должна молча игнорироваться).
  При неправильном использовании класс сообщает об этом с помощью выброса исключения.
*/

// /**
//  * Представляет информацию об ошибке в ходе работы с гамбургером.
//  * Подробности хранятся в свойстве message.
//  * @constructor
//  */
// function HamburgerException() {}

// // не передали обязательные параметры
// const h2 = new Hamburger(); // => HamburgerException: no size given

// // передаем некорректные значения, добавку вместо размера
// const h3 = new Hamburger({
//   size: Hamburger.TOPPING_SPICE,
//   stuffing: Hamburger.TOPPING_SPICE
// });
// // => HamburgerException: invalid size 'TOPPING_SPICE'

// // добавляем много добавок
// const h4 = new Hamburger({
//   size: Hamburger.SIZE_SMALL,
//   stuffing: Hamburger.STUFFING_CHEESE
// });

// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // => HamburgerException: duplicate topping 'SAUCE'
