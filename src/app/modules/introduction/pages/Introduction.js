import React, { useState } from 'react'
import { withRouter } from "react-router"
import SlideFrame from '../../components/SlideFrame'
import slides from '../slides'

function Introduction (props) {
  const children = slides.map(slide => slide.slide)
  const { match, history } = props
  const initIndex = slides.findIndex(slide => slide.name === match.params.description)
  const [index, setIndex] = initIndex < 0 ? useState(0) : useState(initIndex)
  return (
    <SlideFrame
      index={index}
      onChangeIndex={(index) => {
        history.push(`/introduction/${slides[index].name}`)
        setIndex(index)
      }}
      onBack={() => {
        history.push('/')
      }}
    >
      {children}
    </SlideFrame>
  )
}

export default withRouter(Introduction)
