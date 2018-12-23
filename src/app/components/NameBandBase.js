import React from 'react'
import PropTypes from 'prop-types'

function NameBandBase (props) {
  const {
    name,
    nickname,
    frameComponent: Frame,
    nameComponent: Name,
    nicknameComponent: Nickname,
    separateComponent: Separate
  } = props

  return (
    <Frame>
      <Nickname>{nickname}</Nickname>
      <Separate />
      <Name>{name}</Name>
    </Frame>
  )
}

NameBandBase.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  nameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  nicknameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  separateComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

NameBandBase.components = {
  frameComponent: 'Frame',
  nameComponent: 'Name',
  nicknameComponent: 'Nickname',
  separateComponent: 'Separate'
}

export default NameBandBase
