import React from 'react'
import { TextField, makeStyles, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    width: 300,
    margin: theme.spacing(2),
    "& .MuiInputBase-root.Mui-disabled": {
      color: 'black'
    }
  }
}))

const ChatBubble = (props) => {
  const classes = useStyles()

  const ConditionalAvatar = () => {
    if (props.renderAvatar === true) {
      return <Avatar src="https://thispersondoesnotexist.com/image"/>
    } else { return null }
  }

  return (
    <div className={classes.root}>
      <ConditionalAvatar />
      <TextField value={props.value} variant="outlined" helperText={props.timestamp} disabled
        className={classes.textField} multiline/>
    </div>
  )
}

export default ChatBubble