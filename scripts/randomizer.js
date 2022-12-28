class Randomizer {
  speed = 50;
  duration = 3000;
  ships = null;

  randomizerStoppedHandler = null;
  changeShipHandler = null;

  #interval = null;

  constructor() { }

  start() {
    this.#interval = setInterval(() => {
      const shipsToChoose = this.ships
        .filter((s) => s.selected)
        .map((s) => s.name);
      const random = Math.floor(Math.random() * shipsToChoose.length);
      if (this.changeShipHandler != null) {
        this.changeShipHandler(shipsToChoose[random]);
      }
    }, this.speed);

    setTimeout(() => {
      this.stop();
    }, this.duration);
  }

  stop() {
    this.abort()
    if (this.randomizerStoppedHandler) {
      this.randomizerStoppedHandler();
    }
  }

  abort() {
    if (this.#interval) {
      clearInterval(this.#interval);
      this.#interval = null;
    }
  }
}

