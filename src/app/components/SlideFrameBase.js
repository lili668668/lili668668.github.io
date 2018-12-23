import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import Grid from '@material-ui/core/Grid'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

function SlideFrameBase (props) {
  const [slideIndex, setSlideIndex] = useState(0)
  const { children, index = slideIndex, onChangeIndex = setSlideIndex, onBack, frameComponent: Frame, nextButtonComponent: NextButton, prevButtonComponent: PrevButton } = props
  return (
    <Frame onBack={onBack}>
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid container item xs={1} justify="flex-start">
          <PrevButton onClick={() => {
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
          <NextButton onClick={() => onChangeIndex((index + 1) % children.length)} />
        </Grid>
      </Grid>
    </Frame>
  )
}

SlideFrameBase.propTypes = {
  children: PropTypes.array,
  index: PropTypes.number,
  onChangeIndex: PropTypes.func,
  onBack: PropTypes.func,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  nextButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  prevButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

SlideFrameBase.components = {
  frameComponent: 'Frame',
  nextButtonComponent: 'NextButton',
  prevButtonComponent: 'PrevButton'
}

export default SlideFrameBase
