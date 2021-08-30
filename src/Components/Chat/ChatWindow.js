import React from 'react'
import ChatBubble from './ChatBubble'
import { makeStyles, List, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  list: {
    overflow: 'auto',
    maxHeight: 700
  },
  listItem_start: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  listItem_end: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

const ChatWindow = (props) => {
  const classes = useStyles()

  const Message = (data) => {
    if (data.index % 2 !== 0) {
      return (
        <ListItem className={classes.listItem_start}>
          <ChatBubble renderAvatar={true} value={data.message}/>
        </ListItem>
      )
    } else {
      return (
        <ListItem className={classes.listItem_end}>
          <ChatBubble renderAvatar={false} value={data.message}/>
        </ListItem>
      )
    }
  }

  return (
    <List className={classes.list}>
      { props.messages.map((message, index) => <Message key={index} index={index} message={message}/>) }
    </List>
  )
}

export default ChatWindow