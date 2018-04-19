class Clock {
  constructor(callback, interval) {
    // TODO: stricter checking
    this.callback = callback;
    this.interval = interval;
    this.intervalID = null;
    this.isRunning = false;
  }

  tick() {
    this.intervalID = window.setTimeout(() => this.tick(), this.interval);
    // call callback
    this.callback();
  }

  start() {
    this.isRunning = true;
    this.tick();
  }

  stop() {
    this.isRunning = false;
    window.clearInterval(this.intervalID);
  }

  setInterval(interval) {
    this.interval = interval;
  }
}