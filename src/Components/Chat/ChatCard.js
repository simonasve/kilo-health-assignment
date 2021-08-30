import React from 'react'
import { makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Card, CardContent, CardActionArea, 
  Avatar, Typography, IconButton, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    width: '95%',
    height: 100,
    margin: theme.spacing(1),
    border: 'none',
    backgroundColor: 'Snow',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(2)
  },
  typography: {

  }
}))

const ChatCard = (props) => {
  const classes = useStyles()

  const handleDeleteCard = event => {
    event.stopPropagation()
    props.onDeleteClick(props.id)
  }
  
  const handleShowChat = event => {
    props.onShowChat({ firstName: props.firstName, lastName: props.lastName })
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleShowChat} disableRipple>
        <CardContent className={classes.cardContent}>
          <Avatar src="https://thispersondoesnotexist.com/image" className={classes.avatar}/>
          <Typography variant="h6" className={classes.typography}>
            <Box fontFamily="Rockwell">
              {props.firstName} {props.lastName}
            </Box>
          </Typography>
          <IconButton onClick={handleDeleteCard}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ChatCard