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
    // Function for create SUPER Secondomizer ))
    this.createTimerDisplay();
    this.createBtnStart();
    this.createBtnStop();
    this.createLapsList();
    this.startBtnClick();
    this.stopBtnClick();

    this.parentNode.append(this.timeDisplay, this.startBtn, this.stopBtn, this.laps);
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
      //textContent = PAUSE
      if (getStartBtnText === 'pause') {
        console.log('push pause');
        this.startBtn.textContent = 'continue';
        this.stopBtn.textContent = 'lap';
        console.log(this.diffTime);
        this.timeClearInterval();
        this.pauseTime = this.diffTime;
      }
      //textContent = CONTINUE
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
    console.log('it RESET -> ', this.parentNode);
    this.startBtn.textContent = 'start';
    this.timeDisplay.textContent = '00:00.0';

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
  addNextTimeAfterPause() {

  }
  convertTime(val){
    const date = new Date(val);
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ms = date.getMilliseconds();
    if ( min < 10 ) {
      min = `0${min}`;
    }
    if ( sec < 10 ) {
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
    console.log('this.pauseTime: ',this.pauseTime);
    console.log('this.lapTime: ',this.lapTime);
    console.log('this.startTime: ', this.startTime);
    console.log('this.nextTime: ', this.nextTime);
    console.log('this.pauseTime: ',this.pauseTime);
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
