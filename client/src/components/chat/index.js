import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushLog } from "../../utils/redux/actions/formAction";
import { Client } from "@stomp/stompjs";

function Chat() {
  const state = useSelector((state) => state.state);
  const [stompClient, stompClientState] = useState(null);
  const dispatch = useDispatch();
  const [message, messageState] = useState("");
  const [log, logState] = useState(state.log);

  const createConnection = () => {
    let stompTempClient = new Client({
      brokerURL: process.env.REACT_APP_BACKEND_URL,
      onConnect: () => {
        stompTempClient.subscribe("/chat/receive", (messageObj) => {
          let name = JSON.parse(messageObj.body).body.name;
          let mes = JSON.parse(messageObj.body).body.message;

          dispatch(
            pushLog({
              name: name,
              message: mes,
            }),
          );
        });
      },
    });

    stompTempClient.activate();
    stompClientState(stompTempClient);
  };

  const sendData = () => {
    if (!stompClient) {
      createConnection();
    }

    let newMessage = {
      name: state.name.name,
      message: message,
    };

    dispatch(pushLog(newMessage));
    logState([...state.log, newMessage]);
    if (stompClient) {
      stompClient.publish({
        destination: "/app/users",
        body: JSON.stringify({
          name: state.name.name,
          message: message,
        }),
      });
    }
  };

  const changeMessage = (event) => {
    let target = event.target.value;
    messageState(target);
  };

  useEffect(() => {
    createConnection();
  }, []);

  return (
    <div>
      <label>Chat here</label>
      <input onChange={changeMessage} disabled={state.connected}></input>
      <button onClick={sendData}>send</button>
      <ol>
        {log.map((ele, index) => (
          <li key={index}>
            <h3>{ele.name}</h3>
            <h5>{ele.time}</h5>
            <p>{ele.message}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Chat;
