function Description() {

    const [open, setOpen] = React.useState(getConfig().descriptionVisible)

    React.useEffect(() => {
        const config = getConfig()
        config.descriptionVisible = open
        storeConfig(config)
    }, [open])

    function toggleVisibility() {
        setOpen(p => !p)
    }

    return (
        <div>
            <div>
                <div class={open ? "description-panel description-panel-open" : "description-panel description-panel-closed"}>
                    <button onClick={() => { toggleVisibility() }} class="description-panel-toggle" type="button">
                        <span class="">{open ? "▶" : "❔"}</span>
                    </button>
                    {open &&
                        <div class="side-panel">
                            <h3>Description</h3>
                            <p>
                                With the <b>Shiprandomizer</b> you can choose a ship at random.
                                Under settings you can choose the tier level from 1-10 and all Superships.
                            </p>
                            <p>
                                Either select all ships under "select all" or just select the ships
                                you would like to sail from.
                                Your settings will be saved in your browser cache.
                                To change the settngs click on the setting icon (⚙️) on the left site.
                            </p>
                            <p>A free community project for World of Warships (TM)</p>
                            <p>Contact: graf_d@shiprandomizer.de - twitch.tv/Graf_d</p>
                            <p><b>(c) 2022 HighTower & Graf_d</b></p>
                            <a href="https://www.tipeeestream.com/graf_d/donation" target="_blank">
                                <button class="button">a small donation for webhosting would make me happy 🙃</button></a>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}