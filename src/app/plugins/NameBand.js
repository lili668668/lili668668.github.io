import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import compose from '../utils/compose'
import NameBandBase from '../templates/NameBandBase'
import CenterFrame from '../components/CenterFrame'

const frameStyles = theme => ({
  root: {
    paddingBottom: 20
  }
})

const FrameBase = (props) => {
  const { classes } = props
  return (<CenterFrame className={classes.root}>{props.children}</CenterFrame>)
}

const Frame = withStyles(frameStyles)(FrameBase)

const Nickname = (props) => (<Typography variant="h3">{props.children}</Typography>)
const Name = (props) => (<Typography variant="h5">({props.children})</Typography>)
const Separate = () => ''

export default compose({ Frame, Nickname, Name, Separate })(NameBandBase)
