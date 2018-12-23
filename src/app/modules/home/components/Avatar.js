import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AvatarBand from '../../../plugins/AvatarBand'

const styles = theme => ({
  root: {
    width: 180,
    height: 180
  }
})

function Avatar (props) {
  const { classes } = props

  return (
    <AvatarBand.Avatar {...props} className={classes.root} />
  )
}

export default withStyles(styles)(Avatar)
