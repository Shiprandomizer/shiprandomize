function Description() {

    const [open, setOpen] = React.useState(true)

    function toggleVisibility() {
        setOpen(p => !p)
    }

    return (
        <div>
            <div>
                <div class={open ? "description-panel-open side-panel-open" : "description-panel-closed side-panel-closed"}>
                    <button onClick={() => { toggleVisibility() }} class="side-panel-toggle" type="button">
                        <span class="">❔</span
                        >
                    </button>
                    {open &&
                        <div class="side-panel">
                            <p class="blocksatz"><b>Description</b></p>
                            <p>With the Shiprandomizer you can choose a ship at random.</p>
                            <p>
                                Under Settings you can choose the Tier level from 1-10 + Superships.
                            </p>
                            <p>
                                Either select all ships under "select all" or just select the ships
                                you would like to sail from.
                            </p>
                            <p>Your settings will be saved.</p>
                            <p>A free community project for World of Warships (TM)</p>
                            <p>Contact: graf_de90@gmail.com - twitch.tv/Graf_d</p>
                            <p>(c) 2022 HighTower & Graf_d</p>
                            <a href="https://www.tipeeestream.com/graf_d/donation" target="_blank">
                                <button class="button">a small donation for webhosting would make me happy 🙃</button></a>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}