function Profile(props) {
    const [profiles, setProfiles] = React.useState([])
    const [newProfileName, setNewProfileName] = React.useState("")
    const [removeMode, setRemoveMode] = React.useState(false)

    React.useEffect(() => {
        const config = getConfig()
        if (!config.profiles) return
        setProfiles(config.profiles)
    }, [])

    function addProfile() {
        setProfiles(p => {
            const np = [...p];
            const id = getNextFreeNumber(np ? np.map(p => p.id) : [])
            np.push({ id: id, name: newProfileName, shipIds: props.onGetSelectedShipIdsRequest() });
            return np;
        })
    }

    function getNextFreeNumber(numbers) {
        if (!numbers || numbers.length === 0) {
            return 0
        }

        numbers.sort((a, b) => a - b);

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== i) {
                return i;
            }
        }

        return numbers.length;
    }

    function activateProfile(id) {
        if (!props && !props.onSetSelectShipIds) return
        const item = profiles.find(p => p.id === id);
        if (!item || !item.shipIds) return
        props.onSetSelectShipIds(item.shipIds)
    }

    function removeProfile(id) {
        setProfiles(p => {
            const profilesToSet = p.filter(p => p.id !== id);

            return profilesToSet
        });
    }

    React.useEffect(() => {
        const config = getConfig()
        config.profiles = profiles
        storeConfig(config)
    }, [profiles])

    function buttonList(p) {
        if (removeMode) {
            return (<button onClick={() => removeProfile(p.id)} key={p.id} >{p.name ? p.name : p.id} ❌</button>)
        }
        return (<button onClick={() => activateProfile(p.id)} key={p.id} >{p.name ? p.name : p.id}</button>)

    }

    return (
        <div className="config-section" style={{ display: "block" }}>
            <div>
                <button onClick={addProfile}>+</button>
                <input placeholder="profile name" style={{ width: "10rem" }} type="text" value={newProfileName} onChange={(e) => { setNewProfileName(e.target.value) }} ></input>
                <input
                    type="checkbox"
                    id="removeMode"
                    checked={removeMode}
                    onChange={() => setRemoveMode(p => !p)}
                />
                <label for="removeMode">Remove mode</label>
            </div>
            <div>
                {profiles.map((p) => { return buttonList(p) }
                )}
            </div>

        </div>)
}