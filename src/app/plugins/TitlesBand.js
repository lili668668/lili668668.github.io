import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import compose from '../utils/compose'
import TitlesBandBase from '../components/TitlesBandBase'
import CenterFrame from '../components/CenterFrame'

const frameStyles = theme => ({
  root: {
    paddingBottom: 40
  }
})

const FrameBase = (props) => {
  const { classes } = props
  return (<CenterFrame className={classes.root}>{props.children}</CenterFrame>)
}

const Frame = withStyles(frameStyles)(FrameBase)

const Title = (props) => (<Typography variant="subtitle2">{props.children}</Typography>)
const Separate = () => '/'

export default compose({ Frame, Title, Separate })(TitlesBandBase)
