import React from 'react'
import { makeStyles } from '@material-ui/styles'

import compose from '../utils/compose'
import InfoIconsBandBase from '../components/InfoIconsBandBase'
import SpaceAroundFrame from '../components/SpaceAroundFrame'

const useFrameStyles = makeStyles(theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16
  }
}))

const Frame = (props) => {
  const classes = useFrameStyles()
  return (<SpaceAroundFrame className={classes.root}>{props.children}</SpaceAroundFrame>)
}

export default compose({ Frame })(InfoIconsBandBase)
