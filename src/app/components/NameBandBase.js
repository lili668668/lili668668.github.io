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
  frameComponent: PropTypes.func.isRequired,
  nameComponent: PropTypes.func.isRequired,
  nicknameComponent: PropTypes.func.isRequired,
  separateComponent: PropTypes.func.isRequired
}

NameBandBase.components = {
  frameComponent: 'Frame',
  nameComponent: 'Name',
  nicknameComponent: 'Nickname',
  separateComponent: 'Separate'
}

export default NameBandBase
