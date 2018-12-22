import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ErrorIcon from '@material-ui/icons/Error'
import Grid from '@material-ui/core/Grid'
import CardFrame from '../../plugins/CardFrame'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400
  }
}))

function ErrorPage (props) {
  const classes = useStyles()
  return (
    <CardFrame>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <ErrorIcon />
      </Grid>
    </CardFrame>
  )
}

export default ErrorPage
