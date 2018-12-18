import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import CardFrame from './CardFrame'

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

function SlideFrame (props) {
  const [slideIndex, setSlideIndex] = useState(0)
  const { children, index = slideIndex, onChangeIndex = setSlideIndex } = props
  return (
    <CardFrame>
      <BindKeyboardSwipeableViews index={index} onChangeIndex={onChangeIndex} enableMouseEvents>
        {children}
      </BindKeyboardSwipeableViews>
    </CardFrame>
  )
}

SlideFrame.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
  onChangeIndex: PropTypes.func
}

export default SlideFrame
