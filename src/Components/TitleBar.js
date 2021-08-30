import React from 'react'
import { useHistory } from 'react-router-dom';
import LogoAvatar from './LogoAvatar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import ChatIcon from '@material-ui/icons/Chat';
import LockIcon from '@material-ui/icons/Lock'
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white'
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    marginRight: theme.spacing(2),
    backgroundColor: blue[500]
  }
}))

const TitleBar = (props) => {
  const classes = useStyles();
  const hisroty = useHistory();

  const LinkButton = () => {
    if (props.pathname === "/chat") {
      return (
        <Tooltip title="Edit Profile">
          <IconButton edge="end" className={classes.button} onClick={() => hisroty.push("/profile")}>
            <PersonIcon />
          </IconButton>
        </Tooltip>
      )
    } else {
      return (
        <Tooltip title="View Chats">
          <IconButton edge="end" className={classes.button} onClick={() => hisroty.push("/chat")}>
            <ChatIcon />
          </IconButton>
        </Tooltip>
      )
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <LogoAvatar style={classes.avatar}/>
        <Typography variant="h6" className={classes.title}>
          <Box fontFamily="Rockwell">
            Chatification
          </Box>
        </Typography>
        <LinkButton />
        <Tooltip title="Logout">
          <IconButton edge="end" className={classes.button} onClick={() => hisroty.push("/")}>
            <LockIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar