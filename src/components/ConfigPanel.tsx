"use strict";

import { useContext, useEffect, useRef, useState } from "react";
import {
  Ship,
  Tier,
  ShipType,
  shipTypeToString,
  ShipTypes,
  Tiers,
  NationValues,
  Fields,
} from "../models/Config";
import Search from "./Search";
import Profile from "./Profile";
import { ConfigContext } from "../App";

function ConfigPanel() {
  const [config, setConfig] = useContext(ConfigContext);
  const [ships, setShips] = useState<Ship[]>([]);
  const [open, setOpen] = useState(false);
  const [highlightedShips, setHighlightedShips] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState({
    by: "id",
    order: "ascending",
  });
  const [isMuted, setIsMuted] = useState(
    config?.sound ? config.sound.volume == 0 : false
  );

  const shipTable = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    setShips(config.ships);
    setOpen(config.configVisible);
    setSortConfig(config.sort);
  }, []);

  useEffect(() => {
    if (!ships || ships.length === 0) {
      return;
    }
    const newConfig = { ...config };
    newConfig.ships = ships;
    newConfig.configVisible = open;
    newConfig.sort = sortConfig;
    setConfig(newConfig);
  }, [ships, open, sortConfig]);

  useEffect(() => {
    if (!ships || ships.length === 0) {
      return;
    }
    const toSort = [...ships];

    if (!sortConfig) return;

    type shipProps = keyof Ship;

    toSort.sort((a, b) => {
      const aValue = a[sortConfig.by as shipProps];
      const bValue = b[sortConfig.by as shipProps];

      if (sortConfig.order === "descending") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setShips(toSort);
  }, [sortConfig]);

  function setAllSelectionState(selected: boolean) {
    setShips((p) => {
      p.forEach((s) => (s.selected = selected));
      return [...p];
    });
  }

  function selectShip(id: number, select: boolean) {
    const index = ships.findIndex((s) => s.id == id);
    if (index !== -1) {
      setShips((p) => {
        p[index].selected = select;
        return [...p];
      });
    }
  }

  function changeTierSelection(tier: Tier, selected: boolean) {
    setShips((s) => {
      s.filter((ss) => ss.tier === tier).forEach(
        (s) => (s.selected = selected)
      );
      return [...s];
    });
  }
  function changeNationSelection(nation: string, selected: boolean) {
    setShips((s) => {
      s.filter((ss) => ss.nation === nation).forEach(
        (s) => (s.selected = selected)
      );
      return [...s];
    });
  }

  function setSelectShipType(shipType: ShipType, selected: boolean) {
    setShips((s) => {
      s.filter((ss) => ss.type === shipType).forEach(
        (s) => (s.selected = selected)
      );
      return [...s];
    });
  }

  function foundShips(allFoundShips: number[]) {
    if (!allFoundShips || allFoundShips.length === 0) {
      setHighlightedShips([]);
      return;
    }

    setHighlightedShips(allFoundShips);

    if (!shipTable?.current) {
      return;
    }
    console.dir(shipTable.current.children)

    const trs = Array.from(shipTable.current.children).find((s) => {
      if (s instanceof HTMLElement && s.dataset.id) {
        return allFoundShips.includes(parseInt(s.dataset.id));
      }
      return false;
    });

    if (trs) {
      trs.scrollIntoView({ block: "center", inline: "nearest" });
    }
  }

  function isShipHighlighted(id: number) {
    return highlightedShips.includes(id);
  }

  function getSelectedShipIds() {
    return ships.filter((s) => s.selected).map((s) => s.id);
  }

  function setSelectedShipByIds(ids: number[]) {
    const shipsToSelect = [...ships];

    shipsToSelect.forEach((s) => {
      if (ids.includes(s.id)) {
        s.selected = true;
      } else {
        s.selected = false;
      }
    });

    setShips(shipsToSelect);
  }

  function UpDown(props: { name: string }) {
    let indicator = "";
    if (sortConfig && sortConfig.by === props.name) {
      indicator = sortConfig.order == "descending" ? "🠻" : "🠹";
    }

    return <>{indicator}</>;
  }

  function handleTableHeadClick(headerId: string) {
    setSortConfig((p) => {
      return {
        by: headerId,
        order: p && p.order === "ascending" ? "descending" : "ascending",
      };
    });
  }

  function toggleMuteSound() {
    const newConfig = { ...config };
    if (newConfig.sound.volume == 0) {
      newConfig.sound.volume = 0.3;
      setIsMuted(false);
    } else {
      newConfig.sound.volume = 0;
      setIsMuted(true);
    }
    setConfig(newConfig);
  }

  return (
    <div>
      <div
        className={
          open
            ? "side-panel-button-group-left side-panel-button-group-left-open"
            : "side-panel-button-group-left"
        }
      >
        <button className="side-panel-button side-panel-button-toggle-left" onClick={() => setOpen((p) => !p)} >
          {open ? "◀" : "⚙️"}
        </button>
        <button className="side-panel-button side-panel-button-mute-toggle-left" onClick={toggleMuteSound}>
          {isMuted && <div>🔇</div>}
          {!isMuted && <div>📢</div>}
        </button>
      </div>
      <div
        className={open ? "side-panel-left" : "side-panel-left side-panel-closed"}
        style={open ? { display: "block" } : { display: "none" }}
      >
        <div className="config-header">
          <Search
            onShipIdsFound={(s) => {
              foundShips(s);
            }}
          ></Search>

          <div className="ship-config">
            <div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  select:
                </span>
              </div>
              <button onClick={() => { setAllSelectionState(true); }} >all</button>
              {Tiers.map((t) => (
                <button
                  key={t}
                  onClick={() => changeTierSelection(t, true)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  deselect:
                </span>
              </div>
              <button onClick={() => { setAllSelectionState(false); }} >all</button>
              {Tiers.map((t) => (
                <button
                  key={t}
                  onClick={() => changeTierSelection(t, false)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div style={{ marginTop: "1rem" }} className="detail">
              <div>
                {NationValues.map((t) => (
                  <button key={t} onClick={() => changeNationSelection(t, true)}>
                    {t}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: "1rem" }}>
                {ShipTypes.map((t) => (
                  <button key={t} onClick={() => setSelectShipType(t, true)}>
                    {shipTypeToString(t)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Profile
            onSetSelectShipIds={(ds) => {
              setSelectedShipByIds(ds);
            }}
            onGetSelectedShipIdsRequest={getSelectedShipIds}
          ></Profile>
        </div>
        <div className="ship-list">
          <table>
            <thead>
              <tr>
                {Fields.map((t) => (
                  <th
                    className={t === "Id" || t === "Name" ? "" : "detail"}
                    key={t}
                    onClick={() => handleTableHeadClick(t.toLocaleLowerCase())}
                  >
                    {t}
                    <UpDown name={t.toLocaleLowerCase()}></UpDown>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody ref={shipTable}>
              {ships.map((s) => (
                <tr key={s.id} data-id={s.id}>
                  <td>{s.id}.</td>
                  <td>
                    <input
                      id={`${s.id}`}
                      type="checkbox"
                      checked={s.selected}
                      onChange={() => {
                        selectShip(s.id, !s.selected);
                      }}
                      name={`${s.id}`}
                    />
                  </td>
                  <td
                    className={isShipHighlighted(s.id) ? "highlighted-row" : ""}
                  >
                    <label htmlFor={`${s.id}`}>{s.name}</label>
                  </td>
                  <td className="detail">
                    <label htmlFor={`${s.id}`}>{s.nation}</label>
                  </td>
                  <td className="detail">
                    <label htmlFor={`${s.id}`}>{s.tier}</label>
                  </td>
                  <td className="detail">
                    <label htmlFor={`${s.id}`}>{s.kind}</label>
                  </td>
                  <td className="detail">
                    <label htmlFor={`${s.id}`}>
                      {shipTypeToString(s.type)}
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ConfigPanel;
