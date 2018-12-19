import React from 'react'
import PropTypes from 'prop-types'

function CardFrameBase (props) {
  const {
    children,
    onBack,
    appBarComponent: AppBar,
    frameComponent: Frame,
    cardComponent: Card
  } = props

  return (
    <React.Fragment>
      <AppBar onBack={onBack} />
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
  onBack: PropTypes.func,
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
