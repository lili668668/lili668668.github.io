import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit
  }
}))

function Title (props) {
  const classes = useStyles()
  const { children } = props

  return (
    <Typography className={classes.root} variant="h4">{children}</Typography>
  )
}

export default Title
