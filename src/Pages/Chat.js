import { React, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import TitleBar from '../Components/TitleBar'
import ChatHeader from '../Components/Chat/ChatHeader'
import ChatFooter from '../Components/Chat/ChatFooter'
import ChatWindow from '../Components/Chat/ChatWindow'
import ChatCardList from '../Components/Chat/ChatCardList'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  sideGrid: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: 870,
    backgroundColor: '#e6e6e6',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    height: 870,
    backgroundColor: 'Snow',
    position: 'relative'
  }
}))

const Chat = (props) => {
  const classes = useStyles()

  const [currentUserName, setCurrentUserName] = useState("Abby")
  const [currentUserLastName, setCurrentUserLastName] = useState("Sanders")
  const [messages, setMessages] = useState([])
  const [userMessages, setUserMessages] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/612ccefb4fcbee60cee16f65")
      .then(response => response.json())
      .then(data => setUserMessages(data))
  }, [])

  const handleShowChat = data => {
    setCurrentUserName(data.firstName)
    setCurrentUserLastName(data.lastName)
    setShowMenu(false)
    setMessages([])

    fetch("https://api.jsonbin.io/b/612ccefb4fcbee60cee16f65")
      .then(response => response.json())
      .then(data => setUserMessages(data))
  }

  const handleMessageSubmit = data => {
    const randomIndex = Math.floor(Math.random() * 3)
    setMessages([...messages, data, userMessages[randomIndex]])
  }

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu)
  }

  const ResponsiveChat = () => {
    if (!isMobile) {
      return (
        <Grid container>
          <Grid item xs={4} className={classes.sideGrid}>
            <ChatCardList onShowChat={handleShowChat}/>
          </Grid>
          <Grid item xs={8} className={classes.grid}>
            <ChatHeader firstName={currentUserName} lastName={currentUserLastName} isMobile={isMobile}/>
            <ChatFooter onMessageSubmit={handleMessageSubmit}/>
            <ChatWindow messages={messages}/>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container>
          {!showMenu ?
          <Grid item xs={12} className={classes.grid}>
            <ChatHeader firstName={currentUserName} lastName={currentUserLastName} isMobile={isMobile}
              onMenuButtonClick={handleMenuButtonClick}/>
            <ChatFooter onMessageSubmit={handleMessageSubmit}/>
            <ChatWindow messages={messages}/>
          </Grid> :
          <Grid item xs={12} className={classes.sideGrid}>
            <ChatCardList onShowChat={handleShowChat}/>
          </Grid>}
        </Grid>
      )
    }
  }

  return (
    <div>
      <TitleBar pathname={props.location.pathname}/>
      <ResponsiveChat />
    </div>
  )
}

export default Chat