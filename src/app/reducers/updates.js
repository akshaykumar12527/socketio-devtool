const initialState = {
  sockets: {},
  packets: [],
  socketFilter: {},
  packetFilter: {},
  isIoDetected: false
};

function updates(state=initialState, action){
  switch(action.type){
    case 'ADD_PACKET':
      return Object.assign({}, state, {packet: [...state.packets, action.packet]});

    case 'ADD_SOCKET':
      let sockets = state.sockets;
      sockets[action.socket.nsp] = action.socket;
      return Object.assign({}, state, {sockets: sockets});


    default: return state;
  }
}

export default updates;