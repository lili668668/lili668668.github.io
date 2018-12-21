import React from 'react'
import CardFrameBase from '../../plugins/CardFrame'
import AppBar from './AppBar'
import Footer from './Footer'

function CardFrame (props) {
  return (<CardFrameBase appBarComponent={AppBar} footerComponent={Footer} { ...props } />)
}

export default CardFrame
