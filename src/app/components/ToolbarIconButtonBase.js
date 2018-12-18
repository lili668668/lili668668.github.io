import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: 48,
    height: 48,
    color: 'white'
  }
}))

function ToolbarIconButtonBase (props) {
  const { icon: Icon, tooltip, onClick, className, style, tooltipComponent: Tooltip } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <Tooltip title={tooltip} placement="bottom">
      <IconButton onClick={onClick} className={root} style={style}>
        {<Icon />}
      </IconButton>
    </Tooltip>
  )
}

ToolbarIconButtonBase.propTypes = {
  icon: PropTypes.func,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  tooltipComponent: PropTypes.func
}

ToolbarIconButtonBase.components = {
  tooltipComponent: 'Tooltip'
}

export default ToolbarIconButtonBase
