import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = theme => ({
  root: {
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[3]
  }
})

function AppBar (props) {
  const { classes, children, className, style } = props
  const root = classnames(classes.root, className)

  return (
    <MuiAppBar position="fixed" className={root} style={style}>
      <Toolbar>
        {children}
      </Toolbar>
    </MuiAppBar>
  )
}

AppBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default withStyles(styles)(AppBar)
