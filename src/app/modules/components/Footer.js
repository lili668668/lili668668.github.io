import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FooterBase from '../../components/Footer'
import WebsPopover from './WebsPopover'

const styles = theme => ({
  text: {
    color: 'white'
  }
})

function Footer (props) {
  const { classes } = props
  return (
    <FooterBase>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography className={classes.text}>© 2018 ballfish</Typography>
        <WebsPopover />
      </Grid>
    </FooterBase>
  )
}

export default withStyles(styles)(Footer)
