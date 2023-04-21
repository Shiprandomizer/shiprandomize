/* eslint-disable prettier/prettier */
import { createContext } from "react";

import useConfig from "./hooks/useConfig";
import ConfigPanel from "./components/ConfigPanel";
import DescriptionPanel from "./components/DescriptionPanel";
import DefaultConfig from "./service/DefaultConfig";
import { Config } from "./models/Config";
import PlayPanel from "./components/PlayPanel";

type ConfigContextType = [config: Config, setConfig: (config: Config) => void];

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
const defaultValue: ConfigContextType = [DefaultConfig, (config: Config) => {}];

export const ConfigContext = createContext<ConfigContextType>(defaultValue);

function App() {
  const [config, setConfig] = useConfig();
  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      <div>
        <div className="logo logo-watermark logo-watermark-left"></div>
        <div className="logo logo-watermark logo-watermark-right"></div>
        <div className="logo logo-tk logo-tk-bottom">
        <a href="https://twitch.tv/dpp_larifari">
            <button className="buttond logo-tk "></button>
          </a>
        </div>

        <div className="games games-tk games-tk-right">
          <a href="https://shiprandomizer.de/game/game.html">
            <button className="buttona games-tk"></button>
          </a>
        </div>

        <div className="games games-tka games-tk-right">
          <a href="https://shiprandomizer.de/spacer/index.html">
            <button className="buttonb games-tka"></button>
          </a>
        </div>

        <div className="games games-tkb games-tk-right">
          <a href="https://shiprandomizer.de/teamkrado/index.html">
            <button className="buttonc games-tkb"></button>
          </a>
        </div>
        <div className="games games-tkc games-tk-right">
          <a href="https://shiprandomizer.de/downloads/tk-subkiller2.zip">
            <button className="buttond games-tkc"></button>
          </a>
        </div>

        <PlayPanel />
        <ConfigPanel />
        <DescriptionPanel />
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
