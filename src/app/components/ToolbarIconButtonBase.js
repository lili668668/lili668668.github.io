import React from 'react'
import PropTypes from 'prop-types'

function ToolbarIconButtonBase (props) {
  const { icon, onClick, tooltip, tooltipComponent: Tooltip, buttonComponent: Button } = props

  return (
    <Tooltip title={tooltip} placement="bottom">
      <Button icon={icon} onClick={onClick} />
    </Tooltip>
  )
}

ToolbarIconButtonBase.propTypes = {
  icon: PropTypes.func,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  tooltipComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

ToolbarIconButtonBase.components = {
  tooltipComponent: 'Tooltip',
  buttonComponent: 'Button'
}

export default ToolbarIconButtonBase
