const instialState = {
    name: '',
    connected: false,
    log: []
}

const stateReducer = (state = instialState, action) => {
    switch(action.type){
        case 'SET_NAME': 
            state.name = action.payload;
            return state;
        case 'SET_CONNECT':
            state.connected = !state.connected;
            return state;
        case 'PUSH_LOG':
            let now = new Date();
            state.log.push({
                name: action.payload.name,
                message: action.payload.message,
                time: (now.getTime())/1000 /60 / 60
            });
            return state;
        default:
            return state;
    }
}

export default stateReducer;