import React from 'react'
import PropTypes from 'prop-types'

function CardFrameBase (props) {
  const {
    children,
    frameComponent: Frame,
    cardComponent: Card
  } = props

  return (
    <Frame>
      <Card>
        {children}
      </Card>
    </Frame>
  )
}

CardFrameBase.propTypes = {
  children: PropTypes.any,
  frameComponent: PropTypes.func.isRequired,
  cardComponent: PropTypes.func.isRequired
}

CardFrameBase.components = {
  frameComponent: 'Frame',
  cardComponent: 'Card'
}

export default CardFrameBase
