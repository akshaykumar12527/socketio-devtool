import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CSS from 'react-css-modules';
import styles from '../styles/sockets.scss';

import Socket from './Socket';
import {selectSocket} from '../actions/selectActions';

class Sockets extends React.Component {
  render(){
    const sockets = this.props.sockets;
      return (
        <div styleName="sockets">
          {this.renderSockets(sockets)}
        </div>);
  };

  renderSockets(sockets){
    let socketArr = [];
    for(var socket in sockets){
      if(sockets.hasOwnProperty(socket)){
        socketArr.push(
          <Socket key={sockets[socket].nsp}
                  socket={sockets[socket]}
                  onClick={this.onClick.bind(this, sockets[socket])}
                  selected={socket === this.props.selectedSocket.nsp &&
                  sockets[socket].url === this.props.selectedSocket.url}
          />);
      }
    }
    return socketArr;
  };

  onClick(socket){
    this.props.selectSocket(socket);
  }
}

Sockets.propTypes = {
  sockets: PropTypes.object.isRequired,
  selectSocket: PropTypes.func.isRequired
};

const mapStateToProps = function(state){
  console.log("States", state);
  return {
    selectedSocket: state.select.socketFilter
  }
};
export default connect(mapStateToProps, {selectSocket})(CSS(Sockets, styles));