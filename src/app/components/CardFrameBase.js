import React from 'react'
import PropTypes from 'prop-types'

function CardFrameBase (props) {
  const {
    children,
    appBarComponent: AppBar,
    frameComponent: Frame,
    cardComponent: Card
  } = props

  return (
    <React.Fragment>
      <AppBar />
      <Frame>
        <Card>
          {children}
        </Card>
      </Frame>
    </React.Fragment>
  )
}

CardFrameBase.propTypes = {
  children: PropTypes.any,
  appBarComponent: PropTypes.func.isRequired,
  frameComponent: PropTypes.func.isRequired,
  cardComponent: PropTypes.func.isRequired
}

CardFrameBase.components = {
  appBarComponent: 'AppBar',
  frameComponent: 'Frame',
  cardComponent: 'Card'
}

export default CardFrameBase
