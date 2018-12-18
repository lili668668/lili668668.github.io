import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

import compose from '../utils/compose'
import TitlesBandBase from '../components/TitlesBandBase'
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

const Title = (props) => (<Typography variant="subtitle2">{props.children}</Typography>)
const Separate = () => '/'

export default compose({ Frame, Title, Separate })(TitlesBandBase)
