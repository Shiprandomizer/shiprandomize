import { useContext, useEffect, useState } from "react";

import { Config } from "../models/Config";
import { ConfigContext } from "../App";

export default function DescriptionPanel() {
  const [config, setConfig] = useContext(ConfigContext);
  const [open, setOpen] = useState(config ? config.descriptionVisible : true);

  useEffect(() => {
    const newConfig: Config = { ...config };
    newConfig.descriptionVisible = open;
    setConfig(newConfig);
  }, [open]);

  function toggleVisibility() {
    setOpen((p) => !p);
  }

  return (
    <>
      <div
        className={
          open
            ? "side-panel-button-group-right side-panel-button-group-right-open"
            : "side-panel-button-group-right side-panel-button-group-right-closed"
        }
      >
        <button
          className="side-panel-button side-panel-button-toggle-right"
          onClick={() => {
            toggleVisibility();
          }}
          type="button"
        >
          <span className="">{open ? "▶" : "❔"}</span>
        </button>
      </div>

      <div
        className={
          open ? "side-panel-right" : "side-panel-right side-panel-closed"
        }
      >
        {open && (
          <div>
            <h3>Description</h3>
            <p>
              With the <b>Shiprandomizer</b> you can choose a ship at random.
              Under settings you can choose the tier level from 1-10 and all
              Superships.
            </p>
            <p>
              Either select all ships or just select the ships you would like to
              sail from. Your settings will be saved in your browser cache. To
              change the settings, click on the setting icon (⚙️) on the left
              site.
            </p>
            <p>A free community project for World of Warships (TM)</p>
            <p>
              Contact: <b>graf_d@shiprandomizer.de</b>
            </p>
            <p />
            <div>
              <span className="twitch-icon"></span>
              <a href="https://twitch.tv/Graf_d">https://twitch.tv/Graf_d</a>
            </div>
            <p>
              <b>© 2022 by HighTower & Graf_d</b>
            </p>
            <a
              href="https://www.tipeeestream.com/graf_d/donation"
              target="_blank"
              rel="noreferrer"
            >
              <button className="donation">
                A small donation for webhosting would make me happy 🙃
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
