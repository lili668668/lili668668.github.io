import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FooterBase from '../../components/Footer'
import WebsPopover from './WebsPopover'

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white'
  }
}))

function Footer (props) {
  const classes = useStyles()
  return (
    <FooterBase>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography className={classes.text}>© 2018 ballfish</Typography>
        <WebsPopover />
      </Grid>
    </FooterBase>
  )
}

export default Footer
