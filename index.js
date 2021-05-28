class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
    }

    this.start();
  }

  start() {
    const startTime = this.targetDate;

    const countdownSetUp = () => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      const timeIsUp = deltaTime < 0;

      if (timeIsUp) {
        this.stop();
        return;
      }
      this.updateClockface(time);
    }

    countdownSetUp();
    this.intervalId = setInterval(countdownSetUp, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }

  
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockface({ days, hours, mins, secs }) {
  this.refs.days.textContent = `${days}`;
  this.refs.hours.textContent = `${hours}`;
  this.refs.mins.textContent = `${mins}`;
  this.refs.secs.textContent = `${secs}`;
}

}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 09, 2021'),
});
  





 

