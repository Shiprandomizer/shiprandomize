import { createContext } from "react";
import useConfig from "./hooks/useConfig";
import ConfigPanel from "./components/ConfigPanel";
import DescriptionPanel from "./components/DescriptionPanel";
import DefaultConfig from "./service/DefaultConfig";
import { Config } from "./models/Config";
import PlayPanel from "./components/PlayPanel";

type ConfigContextType = [config: Config, setConfig: (config: Config) => void];

const defaultValue: ConfigContextType = [DefaultConfig, (config: Config) => { }];

export const ConfigContext = createContext<ConfigContextType>(defaultValue);

function App() {
  const [config, setConfig] = useConfig();
  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      <div>
        <PlayPanel />
        <ConfigPanel />
        <DescriptionPanel />
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
