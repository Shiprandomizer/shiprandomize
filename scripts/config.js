"use strict";

function Config() {
  const [ships, setShips] = React.useState([]);
  const [configVisible, setConfigVisible] = React.useState(false);
  const [highlightedShips, setHighlightedShips] = React.useState([]);
  const [sortConfig, setSortConfig] = React.useState({ by: "id", order: "ascending" });
  const [isMuted, setIsMuted] = React.useState(getConfig().sound.volume == 0);

  const shipTable = React.useRef()

  React.useEffect(() => {
    const config = getConfig()
    setShips(config.ships);
    setConfigVisible(config.configVisible);
    setSortConfig(config.sort);
  }, [])

  function setAllSelectionState(selected) {
    setShips(p => {
      p.forEach((s) => (s.selected = selected));
      return [...p];
    });
  }

  function onListItemChanged(id) {
    const index = ships.findIndex((s) => s.id == id);
    if (index !== -1) {
      setShips(p => { p[index].selected = !p[index].selected; return [...p]; });
    }
  }

  function changeTierSelection(tier, selected) {
    setShips(s => {
      s.filter(ss => ss.tier === tier)
        .forEach(s => s.selected = selected);
      return [...s]
    });
  }
  function changeNationSelection(nation, selected) {
    setShips(s => {
      s.filter(ss => ss.nation === nation)
        .forEach(s => s.selected = selected);
      return [...s]
    });
  }

  function setSelectShipType(shipType, selected) {
    setShips(s => {
      s.filter(ss => ss.type === shipType)
        .forEach(s => s.selected = selected);
      return [...s]
    });
  }

  function mapShipToString(shipType) {

    switch (shipType) {
      case "A":
        return "Aircraft Carrier"
      case "B":
        return "Battleship"
      case "C":
        return "Cruiser"
      case "D":
        return "Destroyer"
      case "S":
        return "Submarine"
      default:
        return "---"
    }
  }

  function foundShips(allFoundShips) {
    if (!allFoundShips || allFoundShips.length === 0) {
      setHighlightedShips([])
      return
    }

    setHighlightedShips(allFoundShips)

    const trs = Array.from(shipTable.current.children).find(s => allFoundShips.includes(parseInt(s.dataset.id)))

    if (trs) {
      trs.scrollIntoView({ block: "center", inline: "nearest" });
    }
  }

  function isShipHighlighted(id) {
    return highlightedShips.includes(parseInt(id))
  }

  function getSelectedShipIds() {
    return ships.filter(s => s.selected).map(s => s.id)
  }

  function setSelectedShipByIds(ids) {
    const shipsToSelect = [...ships]

    shipsToSelect.forEach(s => {
      if (ids.includes(s.id)) {
        s.selected = true
      } else {
        s.selected = false
      }
    })

    setShips(shipsToSelect)
  }

  function mapType(type) {

    switch (type) {
      case "A":
        return "Aircraft Carrier"
      case "B":
        return "Battleship"
      case "C":
        return "Cruiser"
      case "D":
        return "Destroyer"
      case "S":
        return "Submarine"
    }
  }

  function UpDown(props) {

    let indicator = ""
    if (sortConfig && sortConfig.by === props.name) {
      indicator = sortConfig.order == "descending" ? "🠻" : "🠹"
    }

    return (<React.Fragment>{indicator}</React.Fragment>)
  }

  function handleTableHeadClick(headerId) {
    setSortConfig((p) => {
      return {
        by: headerId,
        order: (p && p.order === "ascending") ? "descending" : "ascending"
      }
    });
  }

  function toggleMuteSound() {
    const config = getConfig()
    if (config.sound.volume == 0) {
      config.sound.volume = 0.3
      setIsMuted(false)
    } else {
      config.sound.volume = 0
      setIsMuted(true)
    }
    storeConfig(config)
  }

  React.useEffect(() => {
    if (!ships || ships.length === 0) { return }
    const config = getConfig()
    config.ships = ships
    config.configVisible = configVisible
    config.sort = sortConfig
    storeConfig(config)
  }, [ships, configVisible, sortConfig])

  React.useEffect(() => {

    if (!ships || ships.length === 0) { return }
    const toSort = [...ships]

    if (!sortConfig) return

    toSort.sort((a, b) => {
      if (sortConfig.order === "descending") {
        return a[sortConfig.by] > b[sortConfig.by] ? 1 : -1
      } else {
        return a[sortConfig.by] < b[sortConfig.by] ? 1 : -1
      }
    })

    setShips(toSort)

  }, [sortConfig])

  return (
    <div>
      <div>
        <button onClick={() => setConfigVisible(p => !p)} id="toggelConfigButton" className="toggelConfigButton">
          ⚙️<span lang="de">Settings {configVisible && "(click to close config)"}</span>
        </button>
        <button className="toggelConfigButton" onClick={toggleMuteSound}>
          {isMuted && <div>🔇</div>}
          {!isMuted && <div>📢</div>}
        </button>
        <div className="config-panel" style={configVisible ? { display: "block" } : { display: "none" }}>

          <div className="config-header">
            {/* <AudioConfig></AudioConfig> */}
            <Search foundShips={(s) => { foundShips(s) }}></Search>

            <div className="ship-config">

              <div>
                <button
                  style={{ width: "100px" }}
                  onClick={() => {
                    setAllSelectionState(true);
                  }}
                >
                  select all
                </button>

                <span style={{ display: "inline-block", width: "100px", paddingLeft: "1rem" }}>Select Tier:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(t =>
                  <button key={t} onClick={() => changeTierSelection(t, true)}>{t}</button>
                )
                }
              </div>

              <div>
                <button
                  style={{ width: "100px" }}
                  onClick={() => {
                    setAllSelectionState(false);
                  }}>
                  unselect all
                </button>

                <span style={{ display: "inline-block", width: "100px", paddingLeft: "1rem" }}>Unselect Tier:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(t =>
                  <button key={t} onClick={() => changeTierSelection(t, false)}>{t}</button>
                )
                }
              </div>
              <div>
                <span><p>Select Nation:    🇬🇧 🇯🇵 🇫🇷 🇺🇸 🇷🇺 🇮🇹 🇩🇪 🇳🇱 </p></span>
                {["U.K.", "Japan", "France", "U.S.A.", "U.S.S.R.", "Italy", "Germany", "Netherlands", "Europe", "Pan-America", "Pan-Asia",].map(t =>

                  <button key={t} onClick={() => changeNationSelection(t, true)}>{t}</button>

                )
                }
              </div>

              <div>
                <span><p>Select Type </p></span>
                {["A", "B", "C", "D", "S"].map(t =>
                  <button key={t} onClick={() => setSelectShipType(t, true)}>{mapShipToString(t)}</button>
                )
                }
              </div>

            </div>
            <Profile onSetSelectShipIds={ds => { setSelectedShipByIds(ds) }} onGetSelectedShipIdsRequest={getSelectedShipIds} ></Profile>
          </div>
          <div className="ship-list">
            <table>
              <thead>
                <tr>
                  {["Id", "", "Name", "Nation", "Tier", "Kind", "Type"].map(t =>
                    <th onClick={() => handleTableHeadClick(t.toLocaleLowerCase())}>{t}
                      <UpDown name={t.toLocaleLowerCase()}></UpDown>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody ref={shipTable}>
                {ships.map((s) => (
                  <tr key={s.id} data-id={s.id} >
                    <td>
                      {s.id}.
                    </td>
                    <td>
                      <input
                        id={s.id}
                        type="checkbox"
                        checked={s.selected}
                        onChange={() => onListItemChanged(s.id)}
                        name={s.id}
                      />
                    </td>
                    <td className={isShipHighlighted(s.id) ? "highlighted-row" : ""}>
                      <label htmlFor={s.id}>{s.name}</label>
                    </td>
                    <td>
                      <label htmlFor={s.id}>{s.nation}</label>
                    </td>
                    <td>
                      <label htmlFor={s.id}>{s.tier}</label>
                    </td>
                    <td>
                      <label htmlFor={s.id}>{s.kind}</label>
                    </td>
                    <td>
                      <label htmlFor={s.id}>{mapType(s.type)}</label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div >
      </div >
    </div >
  );
}
