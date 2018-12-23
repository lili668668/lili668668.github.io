import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

import compose from '../utils/compose'
import ToolbarIconButtonBase from '../components/ToolbarIconButtonBase'
import Tooltip from '../components/Tooltip'

const styles = theme => ({
  root: {
    width: 48,
    height: 48,
    color: 'white'
  }
})


const ButtonBase = (props) => {
  const { classes, onClick, icon: Icon } = props
  return (
    <IconButton onClick={onClick} className={classes.root}>
      {<Icon />}
    </IconButton>
  )
}

ButtonBase.propTypes = {
  icon: PropTypes.func,
  onClick: PropTypes.func
}

const Button = withStyles(styles)(ButtonBase)

export default compose({ Tooltip, Button })(ToolbarIconButtonBase)
