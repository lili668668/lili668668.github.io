import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AvatarFrame from '../../../plugins/AvatarFrame'

const useStyles = makeStyles(theme => ({
  root: {
    width: 180,
    height: 180
  }
}))

function Avatar (props) {
  const classes = useStyles()

  return (
    <AvatarFrame.Avatar {...props} className={classes.root} />
  )
}

export default Avatar
