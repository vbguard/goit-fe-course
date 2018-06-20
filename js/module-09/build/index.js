'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stopwatch = function () {
  function Stopwatch(_ref) {
    var parentNode = _ref.parentNode;

    _classCallCheck(this, Stopwatch);

    this.parentNode = parentNode;
    this.isActive = false;
    this.timeDisplay = null;
    this.startBtn = null;
    this.stopBtn = null;
    this.laps = null;
    this.lapsItems = null;
    this.counter = 0;
    this.timerId = null;
    this.timer = 1;
    this.startTime = null;
    this.pauseTime = null;

    this.createLayout();
  }

  _createClass(Stopwatch, [{
    key: 'createLayout',
    value: function createLayout() {
      this.parentNode.classList.add('clock');
      // Function for create SUPER Secondomizer ))
      this.createTimerTab();
      this.createBtnStart();
      this.createBtnStop();
      this.createLapsList();
      this.startBtnClick();
      this.stopBtnClick();

      this.parentNode.append(this.timeDisplay, this.startBtn, this.stopBtn, this.laps);
    }
  }, {
    key: 'createTimerTab',
    value: function createTimerTab() {
      this.timeDisplay = document.createElement('p');
      this.timeDisplay.classList.add('js-time', 'time');
      this.timeDisplay.textContent = '00:00.0';
    }
  }, {
    key: 'createBtnStart',
    value: function createBtnStart() {
      this.startBtn = document.createElement('button');
      this.startBtn.classList.add('btn', 'js-start');
      this.startBtn.textContent = 'start';
    }
  }, {
    key: 'createBtnStop',
    value: function createBtnStop() {
      this.stopBtn = document.createElement('button');
      this.stopBtn.classList.add('btn', 'js-stop');
      this.stopBtn.textContent = 'reset';
    }
  }, {
    key: 'createLapsList',
    value: function createLapsList() {
      this.laps = document.createElement('ul');
      this.laps.classList.add('laps', 'js-laps');
    }
  }, {
    key: 'startBtnClick',
    value: function startBtnClick() {
      var _this = this;

      this.startBtn.addEventListener('click', function (e) {
        // if () провірка на текст який є PAUSE CONTINUE. Якщо перший то роби то якщо другий то те
        var getStartBtnText = _this.startBtn.textContent;
        // textContent = START
        if (getStartBtnText === 'start') {
          console.log('push start');
          //start timer + change textContent
          _this.startTimer();
          _this.startBtn.textContent = 'pause';
        }
        if (getStartBtnText === 'pause') {
          console.log('push pause');
          _this.startBtn.textContent = 'continue';
          _this.stopBtn.textContent = 'lap';
          _this.timeClearInterval();
        }
        if (getStartBtnText === 'continue') {
          console.log('push continue');
          _this.startBtn.textContent = 'pause';
          _this.stopBtn.textContent = 'reset';
          _this.startTimer();
        }
      });
    }
  }, {
    key: 'stopBtnClick',
    value: function stopBtnClick() {
      var _this2 = this;

      this.stopBtn.addEventListener('click', function (e) {

        var getStopBtnText = _this2.stopBtn.textContent;

        if (getStopBtnText === 'reset') {
          _this2.reset();
        }

        if (getStopBtnText === 'lap') {
          console.log('lap Push Value to list change');
          _this2.stopBtn.textContent = 'reset';
          _this2.pauseTime = _this2.timeDisplay.textContent;
          _this2.addTimeValueToLaps();
        }
      });
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var _this3 = this;

      if (!this.isActive) {
        this.isActive = true;
        this.timerId = setInterval(function () {
          _this3.timeDisplay.textContent = '00:' + _this3.timer.toFixed(1);
          _this3.timer += 0.1;
        }, 100);
      }
    }
  }, {
    key: 'timeClearInterval',
    value: function timeClearInterval() {
      clearInterval(this.timerId);
      this.isActive = false;
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.log('it RESET -> ', this.parentNode);
      this.startBtn.textContent = 'start';
      this.timeDisplay.textContent = '00:00.0';
      //stop interval --->
      //cler ListLaps items --->
      clearInterval(this.timerId);
      this.timerId = null;
      this.isActive = false;
      this.checkingConstructor();
    }
  }, {
    key: 'addTimeValueToLaps',
    value: function addTimeValueToLaps() {
      this.lapsItems = document.createElement('li');
      this.lapsItems.textContent = this.pauseTime;

      this.laps.appendChild(this.lapsItems);
    }
  }, {
    key: 'updateTimeDisplay',
    value: function updateTimeDisplay() {}
  }, {
    key: 'convertTime',
    value: function convertTime() {}
  }, {
    key: 'checkingConstructor',
    value: function checkingConstructor() {
      console.log('this.isActive: ', this.isActive);
      console.log('this.timeTab: ', this.timeDisplay);
      console.log('this.startBtn: ', this.startBtn);
      console.log('this.stopBtn: ', this.stopBtn);
      console.log('this.laps: ', this.laps);
      console.log('this.lapsItems: ', this.lapsItems);
      console.log('this.counter: ', this.counter);
      console.log('this.timerId: ', this.timerId);
      console.log('this.timer: ', this.timer);
      console.log('this.time: ', this.time);
    }
  }]);

  return Stopwatch;
}();

var parentA = {
  parentNode: document.querySelector('.parentA')
};
var parentB = {
  parentNode: document.querySelector('.parentB')
};
var parentC = {
  parentNode: document.querySelector('.parentC')
};

var clock1 = new Stopwatch(parentA);
var clock2 = new Stopwatch(parentB);
var clock3 = new Stopwatch(parentC);