import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoAvatar from '../Components/LogoAvatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar_submit: {
    margin: theme.spacing(2),
    backgroundColor: blue[500],
  },
  typography: {
    marginTop: theme.spacing(5)
  }
}))

const Login = () => {
  const classes = useStyles()
  const hisroty = useHistory()
  
  return (
    <Container maxWidth="xs" className={classes.container}>
      <LogoAvatar style={classes.avatar_submit}/>
      <Typography variant="h3" color="primary">
        <Box fontFamily="Rockwell">
          Chatification
        </Box>
      </Typography>
      <Typography variant="h5" className={classes.typography}>
        Login
      </Typography>
      <TextField variant="outlined" margin="normal" required fullWidth
        label="Email Address" autoFocus/>
      <TextField variant="outlined" margin="normal" required fullWidth
        label="Password" autoFocus type="Password"/>
      <Button fullWidth variant="contained" onClick={() => hisroty.push("/chat")}
        color="primary" className={classes.avatar_submit}>
        Login
      </Button>
    </Container>
  )
}

export default Login