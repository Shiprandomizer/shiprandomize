"use strict";

function Search(props) {
    const [searchText, setSearchText] = React.useState("")
    const [foundShips, setfoundShips] = React.useState([])

    function search(name) {
        setSearchText(name)
        if (!name) {
            setfoundShips([])
            return
        }
        const ships = getConfig().ships
        const found = ships.filter(s => s.name.toLowerCase()
            .includes(name.toLowerCase()))
            .map(f => f.id)
        setfoundShips(found)
    }

    React.useEffect(() => {
        if (!props || !props.foundShips) {
            return
        }
        props.foundShips(foundShips)
    }, [foundShips])

    return (
        <div className="config-search">
            <span> Search: </span>
            <input type="text" value={searchText} onChange={(e) => { search(e.target.value) }} ></input>
            <span> found: {foundShips && foundShips.length}</span>
        </div>
    )
}
