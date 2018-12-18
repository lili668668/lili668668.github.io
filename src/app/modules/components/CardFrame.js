import React from 'react'
import CardFrameBase from '../../plugins/CardFrame'
import AppBar from './AppBar'

function CardFrame (props) {
  return (<CardFrameBase appBarComponent={AppBar} { ...props } />)
}

export default CardFrame
