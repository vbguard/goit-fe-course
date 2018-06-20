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
    this.timerId = null;
    this.timer = null;
    this.startTime = null;
    this.nextTime = null;
    this.pauseTime = 0;
    this.diffTime = null;

    this.createLayout();
  }

  _createClass(Stopwatch, [{
    key: 'createLayout',
    value: function createLayout() {
      this.parentNode.classList.add('clock');

      this.createTimerDisplay();
      this.createBtnStart();
      this.createBtnStop();
      this.createLapsList();
      this.startBtnClick();
      this.stopBtnClick();

      this.parentNode.append(this.timeDisplay, this.startBtn, this.stopBtn, this.laps);
    }
  }, {
    key: 'createTimerDisplay',
    value: function createTimerDisplay() {
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
        var getStartBtnText = _this.startBtn.textContent;

        if (getStartBtnText === 'start') {
          _this.startTimer();
          _this.startBtn.textContent = 'pause';
        }

        if (getStartBtnText === 'pause') {
          _this.startBtn.textContent = 'continue';
          _this.stopBtn.textContent = 'lap';
          _this.timeClearInterval();
          _this.pauseTime = _this.diffTime;
        }

        if (getStartBtnText === 'continue') {
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
          _this2.stopBtn.textContent = 'reset';
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
        this.startTime = Date.now();

        this.timerId = setInterval(function () {
          _this3.nextTime = Date.now();
          _this3.diffTimer();
          _this3.updateTimeDisplay();
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
      this.startBtn.textContent = 'start';
      this.timeDisplay.textContent = '00:00.0';
      this.timeClearInterval();
      this.laps.remove();
      this.timerId = null;
      this.isActive = false;
      // this.checkingConstructor();
    }
  }, {
    key: 'addTimeValueToLaps',
    value: function addTimeValueToLaps() {
      this.lapsItems = document.createElement('li');
      this.lapsItems.textContent = this.convertTime(this.pauseTime);
      this.laps.appendChild(this.lapsItems);
    }
  }, {
    key: 'updateTimeDisplay',
    value: function updateTimeDisplay() {
      this.timer = this.convertTime(this.diffTime);
      this.timeDisplay.textContent = this.timer;
    }
  }, {
    key: 'diffTimer',
    value: function diffTimer() {
      this.diffTime = this.pauseTime + (this.nextTime - this.startTime);
    }
  }, {
    key: 'convertTime',
    value: function convertTime(val) {
      var date = new Date(val);
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var ms = date.getMilliseconds();
      if (min < 10) {
        min = '0' + min;
      }
      if (sec < 10) {
        sec = '0' + sec;
      }
      return min + ':' + sec + '.' + Number.parseInt(ms / 100);
    }
  }, {
    key: 'checkingConstructor',
    value: function checkingConstructor() {
      console.log('this.counter: ', this.counter);
      console.log('this.timerId: ', this.timerId);
      console.log('this.timer: ', this.timer);
      console.log('this.time: ', this.time);
      console.log('this.startTime: ', this.startTime);
      console.log('this.pauseTime: ', this.pauseTime);
      console.log('this.lapTime: ', this.lapTime);
      console.log('this.startTime: ', this.startTime);
      console.log('this.nextTime: ', this.nextTime);
      console.log('this.pauseTime: ', this.pauseTime);
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