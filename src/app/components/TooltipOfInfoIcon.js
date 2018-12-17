import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'

function TooltipOfInfoIcon (props) {
  const { children, className, style, title } = props

  if (title === undefined) return (<React.Fragment>{children}</React.Fragment>)

  return (
    <Tooltip title={title} placement="top" className={className} style={style}>
      {children}
    </Tooltip>
  )

}

TooltipOfInfoIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string
}

export default TooltipOfInfoIcon
