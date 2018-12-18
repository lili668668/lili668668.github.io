import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AvatarBand from '../../../plugins/AvatarBand'

const useStyles = makeStyles(theme => ({
  root: {
    width: 180,
    height: 180
  }
}))

function Avatar (props) {
  const classes = useStyles()

  return (
    <AvatarBand.Avatar {...props} className={classes.root} />
  )
}

export default Avatar
