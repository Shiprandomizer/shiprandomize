function Description() {

    const [visible, setVisible] = React.useState(true)

    function toggleVisibility() {
        setVisible(p => !p)
    }

    return (<div>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        <div class="w3-container">
            <div class="wrapper side-panel-open">
                <button onClick={() => { toggleVisibility() }} class="side-panel-toggle" type="button">
                    <span class="material-icons sp-icon-open">question_mark</span>
                    <span class="material-icons sp-icon-close"
                    >keyboard_double_arrow_left</span
                    >
                </button>
                {visible &&
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
                        <a href="https://www.paypal.com/donate?hosted_button_id=E2WXMLBC7FBQE" target="_blank">
                        <button class="button">Kleine Spende für Webhosting</button></a>
                    </div>
                }
            </div>
        </div>
        <div class="radar"></div>
    </div>);
}