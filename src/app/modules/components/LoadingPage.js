import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import CardFrame from '../../plugins/CardFrame'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400
  }
}))

function LoadingPage (props) {
  const classes = useStyles()
  return (
    <CardFrame>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <CircularProgress disableShrink color="secondary" />
      </Grid>
    </CardFrame>
  )
}

export default LoadingPage
