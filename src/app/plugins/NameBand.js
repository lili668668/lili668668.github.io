import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

import compose from '../utils/compose'
import NameBandBase from '../components/NameBandBase'
import CenterFrame from '../components/CenterFrame'

const useFrameStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40
  }
}))

const Frame = (props) => {
  const classes = useFrameStyles()
  return (<CenterFrame className={classes.root}>{props.children}</CenterFrame>)
}

const Nickname = (props) => (<Typography variant="h3">{props.children}</Typography>)
const Name = (props) => (<Typography variant="h5">({props.children})</Typography>)
const Separate = () => ''

export default compose({ Frame, Nickname, Name, Separate })(NameBandBase)
