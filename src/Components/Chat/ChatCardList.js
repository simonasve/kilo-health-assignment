import { React, useState } from 'react'
import ChatCard from './ChatCard'
import { makeStyles, List, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  list: {
    overflow: 'auto',
    maxHeight: 900
  }
}))

const ChatCardList = (props) => {
  const classes = useStyles()

  const [mockUsers, setMockUsers] = useState([
    {
      id: 1,
      firstName: "Abby",
      lastName: "Sanders"
    },
    {
      id: 2,
      firstName: "Paul",
      lastName: "Whitaker"
    },
    {
      id: 3,
      firstName: "Lisa",
      lastName: "Turner"
    },
    {
      id: 4,
      firstName: "Carl",
      lastName: "Goodwin"
    }
  ])
  
  const handleChatDelete = data => {
    setMockUsers(mockUsers.filter(user => user.id !== data))
  }

  const handleShowChat = data => {
    props.onShowChat(data)
  }

  return (
    <List className={classes.list}>
      {mockUsers.map(user => 
        <ListItem key={user.id}>
          <ChatCard id={user.id} firstName={user.firstName} lastName={user.lastName}
            onDeleteClick={handleChatDelete} onShowChat={handleShowChat}/>
        </ListItem>
      )}
    </List>
  )
}

export default ChatCardList