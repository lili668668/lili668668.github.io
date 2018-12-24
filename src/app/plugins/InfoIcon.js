import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import compose from '../utils/compose'
import InfoIconBase from '../templates/InfoIconBase'
import InfoIconButton from '../components/InfoIconButton'
import FrameOfInfoIcon from '../components/FrameOfInfoIcon'
import Tooltip from '../components/Tooltip'

const nameStyles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
})

const NameBase = (props) => {
  const { classes } = props
  return (<Typography className={classes.root} variant="caption">{props.children}</Typography>)
}

const Name = withStyles(nameStyles)(NameBase)

export default compose({ Frame: FrameOfInfoIcon, Icon: InfoIconButton, Name, Tooltip })(InfoIconBase)
