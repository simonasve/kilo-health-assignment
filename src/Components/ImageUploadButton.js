import React from 'react'
import Button from '@material-ui/core/Button'

const ImageUploadButton = (props) => {
  return (
    <div>
      <input accept="image/*" className={props.inputClass} id="contained-button-file" type="file"/>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={props.buttonClass}>
          {props.text}
        </Button>
      </label>
    </div>
  )
}

export default ImageUploadButton