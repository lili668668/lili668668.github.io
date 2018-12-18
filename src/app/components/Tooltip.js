import React from 'react'
import PropTypes from 'prop-types'
import MuiTooltip from '@material-ui/core/Tooltip'

function Tooltip (props) {
  const { children, className, style, title, placement } = props

  if (title === undefined) return (<React.Fragment>{children}</React.Fragment>)

  return (
    <MuiTooltip title={title} placement={placement} className={className} style={style}>
      {children}
    </MuiTooltip>
  )

}

Tooltip.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  placement: PropTypes.string.isRequired
}

export default Tooltip
