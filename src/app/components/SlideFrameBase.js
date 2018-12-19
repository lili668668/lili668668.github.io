import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  leftButton: {
    zIndex: theme.zIndex.mobileStepper,
    position: 'relative',
    left: -20
  },
  rightButton: {
    zIndex: theme.zIndex.mobileStepper,
    position: 'relative',
    right: -20
  }
}))

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

function SlideFrameBase (props) {
  const classes = useStyles()
  const [slideIndex, setSlideIndex] = useState(0)
  const { children, index = slideIndex, onChangeIndex = setSlideIndex, frameComponent: Frame, nextButtonComponent: NextButton, prevButtonComponent: PrevButton } = props
  return (
    <Frame>
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid container item xs={1} justify="flex-start">
          <PrevButton className={classes.leftButton} onClick={() => {
            const newIndex = index - 1
            if (newIndex < 0) onChangeIndex(children.length - 1)
            else onChangeIndex(newIndex)
          }} />
        </Grid>
        <Grid item xs={10}>
          <BindKeyboardSwipeableViews index={index} onChangeIndex={onChangeIndex} enableMouseEvents>
            {children}
          </BindKeyboardSwipeableViews>
        </Grid>
        <Grid container item xs={1} justify="flex-end">
          <NextButton className={classes.rightButton} onClick={() => onChangeIndex((index + 1) % children.length)} />
        </Grid>
      </Grid>
    </Frame>
  )
}

SlideFrameBase.propTypes = {
  children: PropTypes.array,
  index: PropTypes.number,
  onChangeIndex: PropTypes.func,
  frameComponent: PropTypes.func.isRequired,
  nextButtonComponent: PropTypes.func.isRequired,
  prevButtonComponent: PropTypes.func.isRequired
}
SlideFrameBase.components = {
  frameComponent: 'Frame',
  nextButtonComponent: 'NextButton',
  prevButtonComponent: 'PrevButton'
}

export default SlideFrameBase
