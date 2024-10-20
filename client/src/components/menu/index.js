import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setConnection } from '../../utils/redux/actions/formAction'


function Menu() {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [connected, connectedState] = useState(false);

    const UpdateName = (event) => {
        let name = event.target.value;
        dispatch(setName({name: name}));
    }

    const changeConnection = () => {
        dispatch(setConnection(state));
        connectedState(!connected);
    }

    return (
        <nav>
            <div>
                <label>Name</label>
                <input onChange={UpdateName} type="text" ></ input>
            </div>
            <nav>
                <button disabled={connected} onClick={changeConnection}>Connect</button>
                <button disabled={!connected} onClick={changeConnection}>Disconnect</button>
            </nav>
        </ nav>
    );
}

export default Menu;