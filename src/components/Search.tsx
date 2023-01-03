"use strict";

import { FC, useContext, useEffect, useState } from "react";
import { ConfigContext } from "../App";

interface Props {
  onShipIdsFound: (ships: number[]) => void;
}

const Search: FC<Props> = ({ onShipIdsFound }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [foundShips, setFoundShips] = useState<number[]>([]);
  const [config] = useContext(ConfigContext);

  function search(name: string) {
    if (!config) {
      return;
    }
    setSearchText(name);
    if (!name) {
      setFoundShips([]);
      return;
    }
    const ships = config.ships;
    if (!ships) {
      return;
    }
    const found = ships
      .filter((s) => s.name.toLowerCase().includes(name.toLowerCase()))
      .map((f) => f.id);
    setFoundShips(found);
  }

  useEffect(() => {
    if (!onShipIdsFound) {
      return;
    }
    onShipIdsFound(foundShips);
  }, [foundShips]);

  return (
    <div className="search-panel">
      <span> Search: </span>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          search(e.target.value);
        }}
      ></input>
      <span> found: {foundShips && foundShips.length}</span>
    </div>
  );
};

export default Search;
