import React from 'react'
import PropTypes from 'prop-types'

function TitlesBandBase (props) {
  const {
    titles,
    frameComponent: Frame,
    titleComponent: Title,
    separateComponent: Separate
  } = props

  return (
    <Frame>
      {
        titles
          .map(title => <Title key={title}>{title}</Title>)
          .reduce((prev, curr, index) => [prev, (<Separate key={index} />), curr], [])
      }
    </Frame>
  )
}

TitlesBandBase.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  frameComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  titleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  separateComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

TitlesBandBase.components = {
  frameComponent: 'Frame',
  titleComponent: 'Title',
  separateComponent: 'Separate'
}

export default TitlesBandBase
