const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
});

tour.addStep({
  id: "step1",
  title: "ClockWorx",
  text: "Welcome to ClockWorx! This is a simple clock and timer application that allows you to set a timer and stopwatch",
  attachTo: {
    element: "#header",
    on: "bottom",
  },
  buttons: [
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step2",
  title: "Time & Date",
  text: "See time and date here.",
  attachTo: {
    element: "#current-time-date",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step3",
  title: "Stopwatch",
  text: "Use the stopwatch here.",
  attachTo: {
    element: "#stopwatch",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step4",
  title: "Pomodoro Timer",
  text: "Use the pomodoro timer here.",
  attachTo: {
    element: "#pomodoro-timer",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.start();
