import React from 'react'
import PropTypes from 'prop-types'

function InfoIconBase (props) {
  const {
    name,
    alt,
    src,
    href,
    tooltip,
    frameComponent: Frame,
    iconComponent: Icon,
    nameComponent: Name,
    tooltipComponent: Tooltip
  } = props

  return (
    <Frame>
      <Tooltip title={tooltip} placement="top">
        <span>
          <Icon alt={alt} src={src} href={href} />
        </span>
      </Tooltip>
      {name && (<Name>{name}</Name>)}
    </Frame>
  )
}

InfoIconBase.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  iconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  nameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  tooltipComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

InfoIconBase.components = {
  frameComponent: 'Frame',
  iconComponent: 'Icon',
  nameComponent: 'Name',
  tooltipComponent: 'Tooltip'
}

export default InfoIconBase
