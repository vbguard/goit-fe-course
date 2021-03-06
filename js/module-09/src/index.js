'use strict';

class Stopwatch {
  constructor({
    parentNode
  }) {
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

  createLayout() {
    this.parentNode.classList.add('clock');

    this.createTimerDisplay();
    this.createBtnStart();
    this.createBtnStop();
    this.startBtnClick();
    this.stopBtnClick();

    this.parentNode.append(this.timeDisplay, this.startBtn, this.stopBtn);
  }

  createTimerDisplay() {
    this.timeDisplay = document.createElement('p');
    this.timeDisplay.classList.add('js-time', 'time');
    this.timeDisplay.textContent = '00:00.0';
  }

  createBtnStart() {
    this.startBtn = document.createElement('button');
    this.startBtn.classList.add('btn', 'js-start');
    this.startBtn.textContent = 'start';
  }

  createBtnStop() {
    this.stopBtn = document.createElement('button');
    this.stopBtn.classList.add('btn', 'js-stop');
    this.stopBtn.textContent = 'reset';
  }

  createLapsList() {
    this.laps = document.createElement('ul');
    this.laps.classList.add('laps', 'js-laps');
    this.parentNode.insertAdjacentElement('beforeend', this.laps);
  }

  startBtnClick() {
    this.startBtn.addEventListener('click', (e) => {
      const getStartBtnText = this.startBtn.textContent;

      if (getStartBtnText === 'start') {
        this.startTimer();
        this.createLapsList();
        this.startBtn.textContent = 'pause';
      }

      if (getStartBtnText === 'pause') {
        this.startBtn.textContent = 'continue';
        this.stopBtn.textContent = 'lap';
        this.timeClearInterval();
        this.pauseTime = this.diffTime;
      }

      if (getStartBtnText === 'continue') {
        this.startBtn.textContent = 'pause';
        this.stopBtn.textContent = 'reset';
        this.startTimer();
      }
    });
  }

  stopBtnClick() {
    this.stopBtn.addEventListener('click', (e) => {
      const getStopBtnText = this.stopBtn.textContent;

      if (getStopBtnText === 'reset') {
        this.reset();
      }

      if (getStopBtnText === 'lap') {
        this.stopBtn.textContent = 'reset';
        this.addTimeValueToLaps();
      }
    });
  }

  startTimer() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();

      this.timerId = setInterval(() => {
        this.nextTime = Date.now();
        this.diffTimer();
        this.updateTimeDisplay();
      }, 100);
    }
  }

  timeClearInterval() {
    clearInterval(this.timerId);
    this.isActive = false;
  }

  reset() {
    this.startBtn.textContent = 'start';
    this.timeDisplay.textContent = '00:00.0';
    this.timeClearInterval();
    this.laps.remove();
    this.timerId = null;
    this.isActive = false;
    // this.checkingConstructor();
  }

  addTimeValueToLaps() {
    this.lapsItems = document.createElement('li');
    this.lapsItems.textContent = this.convertTime(this.pauseTime);
    this.laps.appendChild(this.lapsItems);
  }

  updateTimeDisplay() {
    this.timer = this.convertTime(this.diffTime);
    this.timeDisplay.textContent = this.timer;
  }

  diffTimer() {
    this.diffTime = this.pauseTime + (this.nextTime - this.startTime);
  }

  convertTime(val) {
    const date = new Date(val);
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ms = date.getMilliseconds();
    if (min < 10) {
      min = `0${min}`;
    }
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${min}:${sec}.${Number.parseInt(ms / 100)}`;
  }

  checkingConstructor() {
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
}

const parentA = {
  parentNode: document.querySelector('.parentA')
};
const parentB = {
  parentNode: document.querySelector('.parentB')
};
const parentC = {
  parentNode: document.querySelector('.parentC')
};

const clock1 = new Stopwatch(parentA);
const clock2 = new Stopwatch(parentB);
const clock3 = new Stopwatch(parentC);
