/*
  Создайте скрипт приложения-секундомера.

  Изначально в HTML есть разметка:

  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое DOM-узла p.js-time
    новым значение времени в формате xx:xx.x

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue', и таймер продолжает отсчет времени, как будто паузы
    небыло. То есть если во время нажатия 'Pause' прошло 6 секунд со старта,
    то при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
    с 6 секунд и дальше, а не с 16.

    🔔 Подсказка: сохраните время паузы и используйте его при рассчете текущего времени.

  - Если секундомер находится в активном состоянии, текст кнопки button.js-reset
    должен быть 'Reset', а функционал при клике - остановка таймера и сброс всех
    полей в исходное состояние.

  - Если секундомер находится в состоянии паузы, текст кнопки button.js-reset должен
    быть 'Lap', а функционал при клике - сохранение текущего времени секундомера в массив
    и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Выполните домашнее задание используя класс с полями и методами.

  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет
  динамически создана вся разметка для секундомера.

  Должна быть возможность создать сколько угодно экземпляров секундоментов
  на странице и все они будут работать независимо.

  К примеру:

  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);

  Где parent* это существующий DOM-узел.
*/
