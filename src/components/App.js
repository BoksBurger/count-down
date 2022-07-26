export default {
  data() {
    return {
      appGreeting: "It's the final count down!",
      countDown: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      showCountDown: false,
      updateInterval: false,
    };
  },
  methods: {
    CountDown() {
      let dateValue = document.getElementById("dateInput").value;
      let fromDate = new Date(); //Today
      let toDate = new Date(dateValue);
      let ms = toDate.getTime() - fromDate.getTime();
      this.seconds = 60 - fromDate.getSeconds();
      this.minutes = 60 - fromDate.getMinutes();
      this.hours = 24 - fromDate.getHours();
      this.days = Math.floor(ms / 1000 / 60 / 60 / 24);
      //console.clear();
      //console.log(this.days, this.hours, this.minutes, this.seconds);
      if (!this.showCountDown) {
        this.showCountDown = true;
        this.setCountDownUpdateInterval();
      }
    },
    EventCountDown(EventName, EventDate) {
      document.getElementById("dateInput").value = EventDate;
      this.appGreeting = EventName;
      this.CountDown();
    },
    Stop() {
      document.querySelector("#countDownContainer").className =
        "scale-out-vertical";
      setTimeout(() => {
        if (this.updateInterval) clearInterval(this.updateInterval);
        document.getElementById("dateInput").value = "";
        this.showCountDown = false;
        document.querySelector("#countDownContainer").className =
          "scale-in-ver-center";
        this.appGreeting = "It's the final count down!";
      }, 1000);
    },
    setCountDownUpdateInterval() {
      if (this.updateInterval) clearInterval(this.updateInterval);
      this.updateInterval = false;
      this.updateInterval = setInterval(() => {
        this.CountDown();
      }, 1000);
    },
  },
};
