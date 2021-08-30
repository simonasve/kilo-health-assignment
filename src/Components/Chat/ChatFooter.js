import { React, useState } from 'react'
import { TextField, Paper, makeStyles, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
}))

const ChatFooter = (props) => {
  const classes = useStyles()
  const [message, setMessage] = useState('')

  const handleMessageInput = event => {
    event.preventDefault()
    setMessage(event.target.value)
  }

  const handleMessageSubmit = () => {
    props.onMessageSubmit(message)
    setMessage('')
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit()
    }
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <TextField label="Send a message" variant="outlined" fullWidth value={message} 
        onChange={handleMessageInput} onKeyUp={handleKeyPress}/>
      <IconButton onClick={handleMessageSubmit}>
        <SendIcon />
      </IconButton>
    </Paper>
  )
}

export default ChatFooter