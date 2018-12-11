import React from 'react'
import PropTypes from 'prop-types'

function CardFrame (props) {
  const { children } = props

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

CardFrame.propTypes = {
  children: PropTypes.any
}

export default CardFrame
