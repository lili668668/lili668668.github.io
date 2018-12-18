import React from 'react'
import SlideFrameBase from '../../plugins/SlideFrame'
import CardFrame from './CardFrame'

function SlideFrame (props) {
  return (<SlideFrameBase frameComponent={CardFrame} { ...props } />)
}

export default SlideFrame
