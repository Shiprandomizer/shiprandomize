function App() {

  const [currentShip, setCurrentShip] = React.useState("")
  const [running, setRunning] = React.useState(false)

  const randomizer = React.useRef(new Randomizer())
  const jsConfetti = React.useRef(new JSConfetti())

  function goHandler() {
    setRunning(true)
    const config = getConfig()
    randomizer.current.ships = config.ships
    randomizer.current.start()
    randomizer.current.changeShipHandler = (ship) => { setCurrentShip(ship); }
    randomizer.current.randomizerStoppedHandler = () => {
      var audio = new Audio(`assets/sounds/${config.sound.file}.mp3`);
      audio.volume = config.sound.volume
      audio.play();

      jsConfetti.current.addConfetti({
        emojis: ["💀", "⚓"]
        // emojis: [...getConfig().explosionIcons],
      });
      setRunning(false)
    }
  }

  React.useEffect(() => {
    return () => randomizer.current.stop()
  }, [])

  return (
    <div>
      <Config></Config>
      <div className="content">
        <div className="panel">
          <div className="ship" id="ship">
            {currentShip}
          </div>
          <div className="control">
            <button onClick={goHandler} disabled={running} className="go" id="go"></button>
          </div>
        </div>
      </div>
      <Description></Description>
    </div>
  );
}
