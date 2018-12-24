import React from 'react'
import PropTypes from 'prop-types'

function CardFrameBase (props) {
  const {
    children,
    onBack,
    appBarComponent: AppBar,
    footerComponent: Footer,
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
      <Footer />
    </React.Fragment>
  )
}

CardFrameBase.propTypes = {
  children: PropTypes.any,
  onBack: PropTypes.func,
  appBarComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  footerComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cardComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

CardFrameBase.components = {
  appBarComponent: 'AppBar',
  footerComponent: 'Footer',
  frameComponent: 'Frame',
  cardComponent: 'Card'
}

export default CardFrameBase
