import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushLog } from '../../utils/redux/actions/formAction';

function Chat() {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const [message, messageState] = useState('');
    const [log, logState] = useState(state.log);

    const sendData = () => {
        let newMessage = {
            name: state.name.name,
            message: message
        };
        dispatch(pushLog(newMessage));
        logState([...state.log, newMessage]);
    }

    const changeMessage = (event) => {
        let target = event.target.value;
        messageState(target);
    }

    return (
        <div>
            <label>Chat here</label>
            <input onChange={changeMessage} disable={!state.connected}></input>
            <button onClick={sendData}>send</button>
            <ol>
                {
                log.map((ele, index) => (
                    <li key={index}>
                        <h3>{ele.name}</ h3>
                        <h5>{ele.time}</h5>
                        <p>{ele.message}</p>
                    </li>))
                }
            </ol>
        </div>
    );
}

export default Chat;