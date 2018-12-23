import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import CardFrame from '../../plugins/CardFrame'

const styles = theme => ({
  root: {
    minHeight: 400
  }
})

function LoadingPage (props) {
  const { classes } = props
  return (
    <CardFrame>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <CircularProgress disableShrink color="secondary" />
      </Grid>
    </CardFrame>
  )
}

export default withStyles(styles)(LoadingPage)
