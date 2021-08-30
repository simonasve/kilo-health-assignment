import React from 'react'
import TitleBar from '../Components/TitleBar'
import ProfileForm from '../Components/ProfileForm'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';
import { Typography, Container, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  typography: {
    color: blue[500],
  },
  formControl: {
    minWidth: 200
  },
  input: {
    display: 'none'
  },
  button: {
    color: 'white',
    backgroundColor: blue[500]
  }
}))

const Profile = (props) => {
  const classes = useStyles()

  return (
    <div>
      <TitleBar pathname={props.location.pathname}/>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" className={classes.typography}>
          <Box fontFamily="Rockwell">
            Edit Profile
          </Box>
        </Typography>
        <ProfileForm avatarClass={classes.avatar} buttonClass={classes.button} 
          inputClass={classes.input} formControlClass={classes.formControl} />
      </Container>
    </div>
  )
}

export default Profile