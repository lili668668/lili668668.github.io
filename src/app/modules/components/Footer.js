import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FooterBase from '../../components/Footer'
import WebsPopover from './WebsPopover'
import LanguagePopover from './LanguagePopover'

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
        <Typography className={classes.text}>{`© ${(new Date()).getFullYear()} ballfish`}</Typography>
        <Grid item>
          <LanguagePopover />
          <WebsPopover />
        </Grid>
      </Grid>
    </FooterBase>
  )
}

export default withStyles(styles)(Footer)
