import { useContext, useState } from "react";
import JSConfetti from "js-confetti";

import { Ship } from "../models/Config";
import Randomizer from "../service/Randomizer";
import { ConfigContext } from "../App";

const randomizer = new Randomizer();
const jsConfetti = new JSConfetti();

export default function PlayPanel() {
  const [config] = useContext(ConfigContext);
  const [currentShip, setCurrentShip] = useState<Ship>();
  const [running, setRunning] = useState(false);

  function goHandler() {
    setRunning(true);
    randomizer.ships = config.ships;
    randomizer.start();
    randomizer.changeShipHandler = (ship) => {
      setCurrentShip(ship);
    };
    randomizer.randomizerStoppedHandler = () => {
      const audio = new Audio(`sounds/${config.sound.file}.mp3`);
      audio.volume = config.sound ? config.sound.volume : 0.3;
      audio.play();

      jsConfetti.addConfetti({
        emojis: ["💀", "⚓"],
      });
      setRunning(false);
    };
  }

  return (
    <div className="content">
      <div className="panel">
        <div className="logo logo-top"></div>
        <div className="ship-property ship-name">
          {currentShip && currentShip.name}
        </div>
        <div className="ship-property ship-nation">
          {currentShip && currentShip.nation}
        </div>
        <div className="ship-property ship-tier">
          {currentShip && currentShip.tier}
        </div>
        <div className="go-button">
          <button
            aria-label="go"
            onClick={goHandler}
            disabled={running}
            className="go"
          ></button>
        </div>
        <div className="logo logo-bottom"></div>
        <div className="empty-bottom"></div>
      </div>
      <div className="logo logo-watermark-left"></div>
      <div className="logo logo-watermark-right"></div>
    </div>
  );
}
