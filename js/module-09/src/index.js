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
    this.counter = 0;
    this.timerId = null;
    this.timer = 1;
    this.startTime = null;
    this.pauseTime = null;

    this.createLayout();
  }

  createLayout() {
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

  createTimerTab() {
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
  }
  startBtnClick() {
    this.startBtn.addEventListener('click', (e) => {
      // if () провірка на текст який є PAUSE CONTINUE. Якщо перший то роби то якщо другий то те
      const getStartBtnText = this.startBtn.textContent;
      // textContent = START
      if (getStartBtnText === 'start') {
        console.log('push start');
        //start timer + change textContent
        this.startTimer();
        this.startBtn.textContent = 'pause';

      }
      if (getStartBtnText === 'pause') {
        console.log('push pause');
        this.startBtn.textContent = 'continue';
        this.stopBtn.textContent = 'lap';
        this.timeClearInterval();
      }
      if (getStartBtnText === 'continue') {
        console.log('push continue');
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
        console.log('lap Push Value to list change');
        this.stopBtn.textContent = 'reset';
        this.pauseTime = this.timeDisplay.textContent;
        this.addTimeValueToLaps();
      }
    });
  }

  startTimer() {
    if (!this.isActive) {
      this.isActive = true;
      this.timerId = setInterval(() => {
        this.timeDisplay.textContent = `00:${this.timer.toFixed(1)}`;
        this.timer += 0.1;
      }, 100);
    }
  }
  timeClearInterval() {
    clearInterval(this.timerId);
    this.isActive = false;
  }
  reset() {
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
  addTimeValueToLaps() {
    this.lapsItems = document.createElement('li');
    this.lapsItems.textContent = this.pauseTime;

    this.laps.appendChild(this.lapsItems);
  }
  updateTimeDisplay() {

  }
  convertTime() {

  }

  checkingConstructor() {
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
