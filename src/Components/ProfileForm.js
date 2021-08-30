import { React, useState } from 'react'
import ImageUploadButton from '../Components/ImageUploadButton'
import GenderSelect from '../Components/GenderSelect'
import { TextField, Grid, Avatar, Button, Snackbar } from '@material-ui/core'

const ProfileForm = (props) => {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Wander")
  const [emailAddress, setEmailAddress] = useState("john.wander@gmail.com")
  const [address, setAddress] = useState("Cool st. 158A")
  const [gender, setGender] = useState("Male")
  const [about, setAbout] = useState("I like chocolate milk")
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const onFirstNameChange = event => {
    event.preventDefault()
    setFirstName(event.target.value)
  }

  const onLastNameChange = event => {
    event.preventDefault()
    setLastName(event.target.value)
  }

  const onEmailAddressChange = event => {
    event.preventDefault()
    setEmailAddress(event.target.value)
  }

  const onAddressChange = event => {
    event.preventDefault()
    setAddress(event.target.value)
  }

  const onGenderChange = event => {
    event.preventDefault()
    setGender(event.target.value)
  }

  const onAboutChange = event => {
    event.preventDefault()
    setAbout(event.target.value)
  }

  const handleSnackbarShow = () => {
    setOpenSnackbar(!openSnackbar)
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Avatar src="https://thispersondoesnotexist.com/image" className={props.avatarClass}/>
        <ImageUploadButton buttonClass={props.buttonClass} inputClass={props.inputClass} text="Change Photo"/>
      </Grid>
      <Grid item xs={6}>
        <TextField variant="outlined" margin="normal" onChange={onFirstNameChange}
          fullWidth label="First Name" autoFocus value={firstName}/>
      </Grid>
      <Grid item xs={6}>
        <TextField variant="outlined" margin="normal" onChange={onLastNameChange}
          fullWidth label="Last Name" autoFocus value={lastName}/>
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" margin="normal" onChange={onEmailAddressChange}
          fullWidth label="Email Address" autoFocus value={emailAddress}/>
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" margin="normal" onChange={onAddressChange}
          fullWidth label="Home Address" autoFocus value={address}/>
      </Grid>
      <Grid item xs={12}>
        <GenderSelect formControlClass={props.formControlClass} 
          value={gender} onItemSelect={onGenderChange}/>
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" margin="normal" multiline onChange={onAboutChange}
          rows={4} fullWidth label="About You" autoFocus value={about}/>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth onClick={handleSnackbarShow} variant="contained" className={props.buttonClass}>
          Save changes
        </Button>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarShow}>
        <p>Changes saved successfully</p>
      </Snackbar>
    </Grid>
  )
}

export default ProfileForm