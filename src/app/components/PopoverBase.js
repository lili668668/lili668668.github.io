import React, { useState } from 'react'
import PropTypes from 'prop-types'

function PopoverBase (props) {
  const {
    children,
    buttonName,
    buttonComponent: Button,
    popoverComponent: Popover
  } = props

  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <React.Fragment>
      <Button onClick={(event) => setAnchorEl(event.currentTarget)}>{buttonName}</Button>
      <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>{children}</Popover>
    </React.Fragment>
  )
}

PopoverBase.propTypes = {
  children: PropTypes.any,
  buttonName: PropTypes.string,
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  popoverComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

PopoverBase.components = {
  buttonComponent: 'Button',
  popoverComponent: 'Popover'
}

export default PopoverBase
