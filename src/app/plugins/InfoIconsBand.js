import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import compose from '../utils/compose'
import InfoIconsBandBase from '../components/InfoIconsBandBase'
import SpaceAroundFrame from '../components/SpaceAroundFrame'

const frameStyles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16
  }
})

const FrameBase = (props) => {
  const { classes } = props
  return (<SpaceAroundFrame className={classes.root}>{props.children}</SpaceAroundFrame>)
}

const Frame = withStyles(frameStyles)(FrameBase)

export default compose({ Frame })(InfoIconsBandBase)
