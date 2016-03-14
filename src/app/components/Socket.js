import React, {PropTypes} from 'react';
import CSS from 'react-css-modules';
import styles from '../styles/sockets.scss';
import classnames from 'classnames';

class Socket extends React.Component {
  render(){
    const {socket, selected, onClick} = this.props;
    return (
      <div styleName={classnames("socket", {'selected': selected})} onClick={onClick}>
        {socket.url+socket.nsp}
      </div>
    );
  }
}

Socket.propTypes = {
  socket: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};


export default CSS(Socket, styles, {allowMultiple: true});