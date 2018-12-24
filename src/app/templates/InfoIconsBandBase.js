import React from 'react'
import PropTypes from 'prop-types'

function InfoIconsBandBase (props) {
  const {
    children,
    frameComponent: Frame
  } = props

  return (
    <Frame>
      {children}
    </Frame>
  )
}

InfoIconsBandBase.propTypes = {
  children: PropTypes.any,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

InfoIconsBandBase.components = {
  frameComponent: 'Frame'
}

export default InfoIconsBandBase
