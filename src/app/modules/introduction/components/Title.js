import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit
  }
})

function Title (props) {
  const { classes, children } = props

  return (
    <Typography className={classes.root} variant="h4">{children}</Typography>
  )
}

export default withStyles(styles)(Title)
