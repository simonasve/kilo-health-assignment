import React from 'react'
import Chat from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';

const LogoAvatar = (props) => {
  return (
    <Avatar className={props.style}>
      <Chat />
    </Avatar>
  )
}

export default LogoAvatar