import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    boxShadow: 'none'
  }
}))

function AppBar (props) {
  const { children, className, style } = props
  const classes = useStyles()
  const root = classnames(classes.root, className)

  return (
    <MuiAppBar position="static" className={root} style={style}>
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

export default AppBar
