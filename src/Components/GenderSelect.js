import React from 'react'
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'

const GenderSelect = (props) => {
  const handleItemSelect = event => props.onItemSelect(event)

  return (
    <FormControl className={props.formControlClass}>
      <InputLabel>Gender</InputLabel>
      <Select value={props.value} onChange={handleItemSelect}>
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
      </Select>
  </FormControl>
  )
}

export default GenderSelect