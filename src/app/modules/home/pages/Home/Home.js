import React from 'react'
import HomePage from './HomePage'
import CardFrame from '../../../../frames/CardFrame'

function Home (props) {
  return (
    <React.Fragment>
      <CardFrame>
        <HomePage />
      </CardFrame>
    </React.Fragment>
  )
}

export default Home
