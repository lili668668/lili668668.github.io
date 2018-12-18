import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

import compose from '../utils/compose'
import InfoIconBase from '../components/InfoIconBase'
import InfoIconButton from '../components/InfoIconButton'
import FrameOfInfoIcon from '../components/FrameOfInfoIcon'
import Tooltip from '../components/Tooltip'

const useNameStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
}))

const Name = (props) => {
  const classes = useNameStyles()
  return (<Typography className={classes.root} variant="caption">{props.children}</Typography>)
}

export default compose({ Frame: FrameOfInfoIcon, Icon: InfoIconButton, Name, Tooltip })(InfoIconBase)
