"use strict";

function AudioConfig() {
    const [volume, setVolume] = React.useState(getConfig().sound.volume)
    const [file, setFile] = React.useState(getConfig().sound.file)

    function handleChanged(event) {
        setVolume(event.target.value);
    }

    function handleButtonPlayClick() {
        const config = getConfig()
        var audio = new Audio(`assets/sounds/${config.sound.file}.mp3`);
        audio.volume = config.sound.volume
        audio.play();
    }

    React.useEffect(() => {
        const config = getConfig()
        config.sound.volume = volume
        config.sound.file = file
        storeConfig(config)
    }, [volume, file])

    return (
        <div className="config-section">
            <span><small>Volume:</small></span><input type="range" min="0" max="1" step="0.05" value={volume} onChange={(e) => { handleChanged(e) }} />
            <select style={{ margin: "2 2" }} value={file} onChange={(s) => setFile(s.target.value)}>
                {["explosion1", "explosion2",].map(s =>
                    <option key={s} value={s}>{s}</option>
                )
                }
            </select>
            <button onClick={handleButtonPlayClick}>▶</button>
        </div>)
}