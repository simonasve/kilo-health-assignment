import React from 'react'
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core'
import { Avatar, Typography, Box, Paper, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: blue[500],
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2)
  }
}))

const ChatHeader = (props) => {
  const classes = useStyles()

  const handleMenuButtonClick = () => {
    props.onMenuButtonClick()
  }

  return (
    <Paper elevation={3} className={classes.paper}>
    { props.isMobile ?
      <IconButton onClick={handleMenuButtonClick}>
        <MenuIcon />
      </IconButton>
      : null
    }
      <Avatar src="https://thispersondoesnotexist.com/image" className={classes.avatar}/>
      <Typography variant="h4">
        <Box fontFamily="Rockwell">
          {props.firstName} {props.lastName}
        </Box>
      </Typography>
    </Paper>
  )
}

export default ChatHeader