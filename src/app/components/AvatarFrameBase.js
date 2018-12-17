import React from 'react'
import PropTypes from 'prop-types'

function AvatarFrameBase (props) {
  const {
    alt,
    src,
    frameComponent: Frame,
    avatarComponent: Avatar
  } = props

  return (
    <Frame>
      <Avatar alt={alt} src={src} />
    </Frame>
  )
}

AvatarFrameBase.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  frameComponent: PropTypes.func.isRequired,
  avatarComponent: PropTypes.func.isRequired
}

AvatarFrameBase.components = {
  frameComponent: 'Frame',
  avatarComponent: 'Avatar'
}

export default AvatarFrameBase
