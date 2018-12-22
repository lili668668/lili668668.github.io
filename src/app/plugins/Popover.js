import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import MuiPopover from '@material-ui/core/Popover'

import compose from '../utils/compose'
import PopoverBase from '../components/PopoverBase'

const Popover = (props) => (
  <MuiPopover
    onClose={props.onClose}
    open={props.open}
    anchorEl={props.anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    {props.children}
  </MuiPopover>
)

Popover.propTypes = {
  children: PropTypes.any,
  open: PropTypes.boolean,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func
}

export default compose({ Button, Popover })(PopoverBase)
