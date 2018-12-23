import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: theme.palette.grey[500],
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: 51,
    padding: theme.spacing.unit
  }
})

function Footer (props) {
  const { classes, children, className, style } = props
  const root = classnames(classes.root, className)

  return (
    <footer className={root} style={style}>
      {children}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object
}

export default withStyles(styles)(Footer)
